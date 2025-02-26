const baseButton = {
    display: "block",
    margin: "10px auto",
    padding: "15px",
    width: "300px",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    borderRadius: "3px",
    transition: "all 0.3s ease-in-out",
    border: "none",
    textTransform: "uppercase",
    color: "white",
    boxShadow: "inset 0px 3px 10px rgba(255, 255, 255, 0.5), 0px 5px 15px rgba(0, 0, 0, 0.3)",
    position: "relative",
};

const styles = {
    container: {
        textAlign: "center",
        padding: "20px",
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #7B1FA2, #4A148C)",
        color: "white",
    },
    questionCount: {
        fontSize: "16px",
        fontWeight: "bold",
        background: "black",
        color: "white",
        display: "inline-block",
        padding: "4px 12px",
        borderRadius: "10px",
    },
    button: {
        ...baseButton,
        width: "250px",
        background: "linear-gradient(to bottom, #4A90E2, #0066cc)",
        boxShadow: "inset 0px 2px 8px rgba(255, 255, 255, 0.3), 0px 5px 15px rgba(0, 0, 0, 0.3)",
    },
    optionButton: baseButton,
    optionButtonBlue: { background: "linear-gradient(to bottom, #0A61B3, #0A61B370)" },
    optionButtonGreen: { background: "linear-gradient(to bottom, #018B93, #018B9370)" },
    optionButtonOrange: { background: "linear-gradient(to bottom, #E27409, #E2740970)" },
    optionButtonRed: { background: "linear-gradient(to bottom, #E12A67, #E12A6770)" },
    optionHover: {
        transform: "scale(1.08)",
        boxShadow: "0px 7px 20px rgba(255, 255, 255, 0.6)",
    },
    pass: { ...baseButton, background: "linear-gradient(to bottom, #4CAF50, #2E7D3270)" },
    fail: { ...baseButton, background: "linear-gradient(to bottom, #D32F2F, #B71C1C70)" },
};

export default styles;
