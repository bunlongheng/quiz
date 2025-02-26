import React, { useState, useEffect } from "react";

const App = () => {
    const [quizData, setQuizData] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    // Load quiz questions from JSON
    useEffect(() => {
        fetch("/data/dino.json")
            .then(response => response.json())
            .then(data => setQuizData(data))
            .catch(error => console.error("Error loading JSON:", error));
    }, []);

    // Function to play sounds
    const playSound = type => {
        const audio = new Audio(type === "correct" ? "/sounds/correct.mp3" : "/sounds/wrong.mp3");
        audio.play();
    };

    const handleAnswer = option => {
        setSelectedAnswer(option);

        if (option === quizData[currentQuestion].answer) {
            setScore(score + 1);
            playSound("correct"); // Play correct sound
        } else {
            playSound("wrong"); // Play wrong sound
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

    if (quizData.length === 0) return <h1>Loading...</h1>;

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Dinosaur Quiz 🦖</h1>
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
                                display: "block",
                                margin: "10px auto",
                                padding: "12px",
                                width: "220px",
                                fontSize: "16px",
                                fontWeight: "bold",
                                cursor: "pointer",
                                borderRadius: "8px",
                                transition: "all 0.2s ease-in-out",
                                background: selectedAnswer === option ? (option === quizData[currentQuestion].answer ? "green" : "red") : "lightgray",
                                color: "white",
                                border: "2px solid transparent",
                            }}
                            onMouseEnter={e => (e.target.style.border = "2px solid black")} // Hover effect
                            onMouseLeave={e => (e.target.style.border = "2px solid transparent")} // Reset hover
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
