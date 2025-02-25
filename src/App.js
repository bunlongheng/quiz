import React, { useState } from "react";

const quizData = [
    {
        question: "What is the largest dinosaur?",
        options: ["T-Rex", "Brachiosaurus", "Spinosaurus", "Argentinosaurus"],
        answer: "Argentinosaurus",
    },
    {
        question: "Which dinosaur had three horns?",
        options: ["Stegosaurus", "Triceratops", "Velociraptor", "Baryonyx"],
        answer: "Triceratops",
    },
];

export default function QuizTaker() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [feedback, setFeedback] = useState("");
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = option => {
        if (selectedAnswer) return;
        setSelectedAnswer(option);

        if (option === quizData[currentQuestionIndex].answer) {
            setFeedback("Correct!");
            setScore(score + 1);
            new Audio("/sounds/correct.mp3").play();
        } else {
            setFeedback(`Wrong! The correct answer was ${quizData[currentQuestionIndex].answer}`);
            new Audio("/sounds/wrong.mp3").play();
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex + 1 < quizData.length) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer(null);
            setFeedback("");
        } else {
            setShowResult(true);
        }
    };

    return (
        <div className="quiz-container p-6 text-center">
            {!showResult ? (
                <>
                    <h1 className="text-2xl font-bold mb-4">{quizData[currentQuestionIndex].question}</h1>
                    <div className="space-y-2">
                        {quizData[currentQuestionIndex].options.map(option => (
                            <button key={option} className={`block w-full p-2 rounded-lg text-white font-semibold ${selectedAnswer === option ? (option === quizData[currentQuestionIndex].answer ? "bg-green-500" : "bg-red-500") : "bg-blue-500 hover:bg-blue-700"}`} onClick={() => handleAnswer(option)}>
                                {option}
                            </button>
                        ))}
                    </div>
                    <p className="mt-4 text-lg font-semibold">{feedback}</p>
                    {selectedAnswer && (
                        <button className="mt-4 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-900" onClick={handleNextQuestion}>
                            {currentQuestionIndex + 1 < quizData.length ? "Next Question" : "See Result"}
                        </button>
                    )}
                </>
            ) : (
                <h1 className="text-2xl font-bold">
                    Quiz Completed! Your Score: {score}/{quizData.length}
                </h1>
            )}
        </div>
    );
}
