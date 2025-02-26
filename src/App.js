import React, { useState } from "react";
import styles from "./styles";
import ResultScreen from "./components/ResultScreen";

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

    const [hoveredOption, setHoveredOption] = useState(null);

    const optionColors = [styles.optionButtonBlue, styles.optionButtonGreen, styles.optionButtonOrange, styles.optionButtonRed];

    if (showResult) {
        return <ResultScreen score={score} total={quizData?.length || 0} onRestart={() => window.location.reload()} />;
    }

    const startQuiz = category => {
        setQuizCategory(category);
        fetch(`/data/${category}.json`)
            .then(response => response.json())
            .then(data => setQuizData(data))
            .catch(error => console.error("Error loading JSON:", error));
    };

    const handleAnswer = option => {
        if (answered) return; // Prevent multiple clicks
        setAnswered(true);
        setSelectedAnswer(option);

        const isCorrect = option === quizData[currentQuestion].answer;

        if (isCorrect) {
            setScore(prev => prev + 1);
            correctSound.currentTime = 0;
            correctSound.play();
        } else {
            wrongSound.currentTime = 0;
            wrongSound.play();
        }

        // ✅ Instantly move to the next question when clicked
        if (currentQuestion + 1 < quizData.length) {
            setTimeout(() => {
                setCurrentQuestion(prev => prev + 1);
                setSelectedAnswer(null);
                setAnswered(false);
            }, 300); // ⬅️ Super short delay for UI transition
        } else {
            setShowResult(true);
        }
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
                    {quizData[currentQuestion].options.map((option, index) => {
                        const isCorrect = option === quizData[currentQuestion].answer;
                        const isSelected = option === selectedAnswer;

                        return (
                            <button
                                key={option}
                                onClick={() => handleAnswer(option)}
                                style={{
                                    ...styles.optionButton,
                                    ...optionColors[index % optionColors.length],
                                    ...(hoveredOption === option ? styles.optionHover : {}),
                                    ...(isSelected ? (isCorrect ? styles.correctAnswer : styles.wrongAnswer) : {}),
                                }}
                                onMouseEnter={() => setHoveredOption(option)}
                                onMouseLeave={() => setHoveredOption(null)}
                                disabled={answered} // ✅ Prevents multiple clicks
                            >
                                {option}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default App;
