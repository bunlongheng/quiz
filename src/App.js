import React, { useState, useEffect } from "react";

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

const styles = {
    container: {
        textAlign: "center",
        padding: "20px",
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #7B1FA2, #4A148C)", // Purple gradient
        color: "white",
    },
    questionCount: {
        fontSize: "20px",
        fontWeight: "bold",
        background: "black",
        color: "white",
        display: "inline-block",
        padding: "5px 10px",
        borderRadius: "15px",
    },
    button: {
        display: "block",
        margin: "10px auto",
        padding: "12px",
        width: "220px",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer",
        borderRadius: "8px",
        transition: "all 0.2s ease-in-out",
        background: "linear-gradient(to bottom, #4A90E2, #0066cc)",
        color: "white",
        border: "none",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    },
    optionButton: {
        display: "block",
        margin: "10px auto",
        padding: "15px",
        width: "300px",
        fontSize: "18px",
        fontWeight: "bold",
        cursor: "pointer",
        borderRadius: "10px",
        transition: "all 0.2s ease-in-out",
        background: "linear-gradient(to bottom, #4A90E2, #0066cc)",
        color: "white",
        border: "none",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
    },
    pass: {
        fontSize: "24px",
        fontWeight: "bold",
        padding: "20px",
        borderRadius: "10px",
        background: "linear-gradient(to bottom, #4CAF50, #2E7D32)", // Green gradient
    },
    fail: {
        fontSize: "24px",
        fontWeight: "bold",
        padding: "20px",
        borderRadius: "10px",
        background: "linear-gradient(to bottom, #D32F2F, #B71C1C)", // Red gradient
    },
};

export default App;
