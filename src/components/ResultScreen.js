import React from "react";
import Confetti from "react-confetti";

const ResultScreen = ({ score, totalQuestions }) => {
    const isPass = score / totalQuestions >= 0.5;
    const percentage = Math.round((score / totalQuestions) * 100);
    const message = isPass ? "🎉 WELL DONE!" : "❌ TRY AGAIN!";

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                background: isPass ? "linear-gradient(to bottom, #4CAF50, #2E7D32)" : "linear-gradient(to bottom, #D32F2F, #B71C1C)",
                color: "white",
                textAlign: "center",
            }}
        >
            {isPass && <Confetti />}
            <h1 style={{ fontSize: "80px", fontWeight: "bold", marginBottom: "20px" }}>{message}</h1>
            <h2 style={{ fontSize: "50px", fontWeight: "bold" }}>Score: {percentage}%</h2>
        </div>
    );
};

export default ResultScreen;
