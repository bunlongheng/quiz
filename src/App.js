import React, { useState, useEffect } from "react";
import styles from "./styles"; // Import styles

const correctSound = new Audio("/sounds/correct.mp3");
const wrongSound = new Audio("/sounds/wrong.mp3");

const App = () => {
    const [quizData, setQuizData] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [quizCategory, setQuizCategory] = useState(null);
    const [answered, setAnswered] = useState(false);

    const startQuiz = category => {
        setQuizCategory(category);
        fetch(`/data/${category}.json`)
            .then(response => response.json())
            .then(data => setQuizData(data))
            .catch(error => console.error("Error loading JSON:", error));
    };

    const handleAnswer = option => {
        if (answered) return;
        setAnswered(true);
        setSelectedAnswer(option);

        if (option === quizData[currentQuestion].answer) {
            setScore(score + 1);
            correctSound.play();
        } else {
            wrongSound.play();
        }

        setTimeout(() => {
            if (currentQuestion + 1 < quizData.length) {
                setCurrentQuestion(currentQuestion + 1);
                setSelectedAnswer(null);
                setAnswered(false);
            } else {
                setShowResult(true);
            }
        }, 1000);
    };

    if (!quizCategory) {
        return (
            <div style={styles.container}>
                <h1>Pick a Quiz 🧠</h1>
                <button onClick={() => startQuiz("dino")} style={styles.button}>
                    🦖 Dinosaur
                </button>
                <button onClick={() => startQuiz("states")} style={styles.button}>
                    🌎 U.S. States
                </button>
                <button onClick={() => startQuiz("birds")} style={styles.button}>
                    🕊️ Birds
                </button>
            </div>
        );
    }

    if (quizData.length === 0) return <h1>Loading...</h1>;

    return (
        <div style={styles.container}>
            <h1>{quizCategory.charAt(0).toUpperCase() + quizCategory.slice(1)} Quiz</h1>
            <h2 style={styles.questionCount}>
                {currentQuestion + 1}/{quizData.length}
            </h2>
            {showResult ? (
                <div style={score >= quizData.length / 2 ? styles.pass : styles.fail}>
                    <h2>
                        Your score: {score} / {quizData.length}
                    </h2>
                </div>
            ) : (
                <div>
                    <h3>{quizData[currentQuestion].question}</h3>
                    {quizData[currentQuestion].options.map(option => (
                        <button
                            key={option}
                            onClick={() => handleAnswer(option)}
                            style={{
                                ...styles.optionButton,
                                background: selectedAnswer === option ? (option === quizData[currentQuestion].answer ? "green" : "red") : "linear-gradient(to bottom, #4A90E2, #0066cc)",
                            }}
                            disabled={answered}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default App;
