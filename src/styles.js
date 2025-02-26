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

export default styles;
