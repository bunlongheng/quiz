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

    const startQuiz = category => {
        setQuizCategory(category);
        fetch(`/data/${category}.json`)
            .then(response => response.json())
            .then(data => setQuizData(data))
            .catch(error => console.error("Error loading JSON:", error));
    };

    const handleAnswer = option => {
        if (selectedAnswer) return; // Prevent clicking multiple times

        setSelectedAnswer(option);
        if (option === quizData[currentQuestion].answer) {
            setScore(score + 1);
            correctSound.play(); // Play success sound
        } else {
            wrongSound.play(); // Play failure sound
        }

        setTimeout(() => {
            if (currentQuestion + 1 < quizData.length) {
                setCurrentQuestion(currentQuestion + 1);
                setSelectedAnswer(null);
            } else {
                setShowResult(true);
            }
        }, 1000);
    };

    if (!quizCategory) {
        return (
            <div style={{ textAlign: "center", padding: "20px" }}>
                <h1>Pick a Quiz 🧠</h1>
                <button onClick={() => startQuiz("dino")} style={styles.button} onMouseEnter={e => (e.target.style.border = "2px solid black")} onMouseLeave={e => (e.target.style.border = "2px solid transparent")}>
                    🦖 Dinosaur
                </button>
                <button onClick={() => startQuiz("states")} style={styles.button} onMouseEnter={e => (e.target.style.border = "2px solid black")} onMouseLeave={e => (e.target.style.border = "2px solid transparent")}>
                    🌎 U.S. States
                </button>
                <button onClick={() => startQuiz("birds")} style={styles.button} onMouseEnter={e => (e.target.style.border = "2px solid black")} onMouseLeave={e => (e.target.style.border = "2px solid transparent")}>
                    🕊️ Birds
                </button>
            </div>
        );
    }

    if (quizData.length === 0) return <h1>Loading...</h1>;

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>{quizCategory.charAt(0).toUpperCase() + quizCategory.slice(1)} </h1>
            {showResult ? (
                <h2>
                    Your score: {score} / {quizData.length}
                </h2>
            ) : (
                <div>
                    <h3>{quizData[currentQuestion].question}</h3>
                    {quizData[currentQuestion].options.map(option => (
                        <button
                            key={option}
                            onClick={() => handleAnswer(option)}
                            style={{
                                ...styles.button,
                                background: selectedAnswer === option ? (option === quizData[currentQuestion].answer ? "green" : "red") : "lightgray",
                            }}
                            onMouseEnter={e => (e.target.style.border = "2px solid black")}
                            onMouseLeave={e => (e.target.style.border = "2px solid transparent")}
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
        background: "lightgray",
        color: "white",
        border: "2px solid transparent",
    },
};

export default App;
