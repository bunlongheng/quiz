import React, { useEffect } from "react";
import styles from "../styles";

const ResultScreen = ({ score, totalQuestions }) => {
    const isPassed = score >= totalQuestions / 2;

    useEffect(() => {
        const congratsSound = new Audio("/sounds/correct2.mp3");
        if (isPassed) {
            congratsSound.play();
        }
    }, [isPassed]);

    return (
        <div
            style={{
                ...styles.container,
                background: isPassed
                    ? "linear-gradient(to bottom, #4CAF50, #2E7D32)" // ✅ Green for pass
                    : "linear-gradient(to bottom, #D32F2F, #B71C1C)", // ❌ Red for fail
            }}
        >
            <div style={isPassed ? styles.pass : styles.fail}>
                <h2>
                    Your score: {score} / {totalQuestions}
                </h2>
            </div>
        </div>
    );
};

export default ResultScreen;
