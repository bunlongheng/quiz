import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";

const ResultScreen = ({ score, totalQuestions }) => {
    const navigate = useNavigate();
    const percentage = ((score / totalQuestions) * 100).toFixed(0);
    const isPass = score >= totalQuestions / 2;

    useEffect(() => {
        const timer = setTimeout(() => navigate("/"), 5000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div
            style={{
                textAlign: "center",
                padding: "50px",
                minHeight: "100vh",
                background: isPass ? "linear-gradient(to bottom, #4CAF50, #2E7D32)" : "linear-gradient(to bottom, #D32F2F, #B71C1C)",
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {isPass && <Confetti />}
            <h1 style={{ fontSize: "60px", fontWeight: "bold" }}>{isPass ? "🎉 WELL DONE! 🎉" : "😢 TRY AGAIN!"}</h1>
            <h2 style={{ fontSize: "40px", marginTop: "20px" }}>Your Score: {percentage}%</h2>
            <button
                onClick={() => navigate("/")}
                style={{
                    marginTop: "20px",
                    padding: "15px 30px",
                    fontSize: "18px",
                    fontWeight: "bold",
                    borderRadius: "5px",
                    border: "none",
                    cursor: "pointer",
                    background: "black",
                    color: "white",
                    transition: "all 0.3s ease",
                }}
            >
                Back to Main
            </button>
        </div>
    );
};

export default ResultScreen;
