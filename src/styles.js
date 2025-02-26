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
        padding: "5px 15px",
        borderRadius: "20px",
    },
    button: {
        display: "block",
        margin: "10px auto",
        padding: "15px",
        width: "250px",
        fontSize: "18px",
        fontWeight: "bold",
        cursor: "pointer",
        borderRadius: "12px",
        transition: "all 0.3s ease-in-out",
        border: "none",
        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
        color: "white",
        textTransform: "uppercase",
        position: "relative",
        background: "linear-gradient(to bottom, #4A90E2, #0066cc)",
    },
    buttonHover: {
        transform: "scale(1.05)",
        boxShadow: "0px 7px 20px rgba(255, 255, 255, 0.4)",
    },
    optionButton: {
        display: "block",
        margin: "10px auto",
        padding: "15px",
        width: "300px",
        fontSize: "18px",
        fontWeight: "bold",
        cursor: "pointer",
        borderRadius: "12px",
        transition: "all 0.3s ease-in-out",
        border: "none",
        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.4)",
        color: "white",
        textTransform: "uppercase",
    },
    optionButtonBlue: {
        background: "linear-gradient(to bottom, #3498db, #2980b9)", // Blue gradient
    },
    optionButtonGreen: {
        background: "linear-gradient(to bottom, #2ecc71, #27ae60)", // Green gradient
    },
    optionButtonOrange: {
        background: "linear-gradient(to bottom, #f39c12, #e67e22)", // Orange gradient
    },
    optionButtonRed: {
        background: "linear-gradient(to bottom, #e74c3c, #c0392b)", // Red gradient
    },
    pass: {
        fontSize: "24px",
        fontWeight: "bold",
        padding: "20px",
        borderRadius: "10px",
        background: "linear-gradient(to bottom, #4CAF50, #2E7D32)", // Green gradient
        boxShadow: "0px 5px 20px rgba(0, 255, 0, 0.5)",
    },
    fail: {
        fontSize: "24px",
        fontWeight: "bold",
        padding: "20px",
        borderRadius: "10px",
        background: "linear-gradient(to bottom, #D32F2F, #B71C1C)", // Red gradient
        boxShadow: "0px 5px 20px rgba(255, 0, 0, 0.5)",
    },
};

export default styles;
