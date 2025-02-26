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
                <div style={styles.cardContainer}>
                    <div style={styles.card} onClick={() => startQuiz("aircraft")}>
                        <img src="/images/aircrafts.png" alt="Aircraft" style={styles.cardImage} />
                        <h2>✈️ Aircraft</h2>
                    </div>
                    <div style={styles.card} onClick={() => startQuiz("birds")}>
                        <img src="/images/birds.png" alt="Birds" style={styles.cardImage} />
                        <h2>🕊️ Birds</h2>
                    </div>
                    <div style={styles.card} onClick={() => startQuiz("construction-vehicles")}>
                        <img src="/images/construction-vehicles.png" alt="Construction Vehicles" style={styles.cardImage} />
                        <h2>🚜 Construction Vehicles</h2>
                    </div>
                    <div style={styles.card} onClick={() => startQuiz("dino")}>
                        <img src="/images/dinos.png" alt="Dinosaurs" style={styles.cardImage} />
                        <h2>🦖 Dinosaurs</h2>
                    </div>
                    <div style={styles.card} onClick={() => startQuiz("fruits")}>
                        <img src="/images/fruits.png" alt="Fruits" style={styles.cardImage} />
                        <h2>🍎 Fruits</h2>
                    </div>
                    <div style={styles.card} onClick={() => startQuiz("insects")}>
                        <img src="/images/insects.png" alt="Insects" style={styles.cardImage} />
                        <h2>🐞 Insects</h2>
                    </div>
                    <div style={styles.card} onClick={() => startQuiz("reptiles")}>
                        <img src="/images/reptiles.png" alt="Reptiles" style={styles.cardImage} />
                        <h2>🐍 Reptiles</h2>
                    </div>
                    <div style={styles.card} onClick={() => startQuiz("states")}>
                        <img src="/images/states.png" alt="U.S. States" style={styles.cardImage} />
                        <h2>🌎 U.S. States</h2>
                    </div>
                </div>
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
                                disabled={answered}
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
