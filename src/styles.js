const baseButton = {
    display: "block", // Ensure buttons appear on separate lines
    margin: "10px auto",
    padding: "15px",
    width: "300px",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    borderRadius: "5px",
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
    questionText: {
        marginBottom: "20px", // Add spacing between question and buttons
    },
    optionContainer: {
        display: "flex",
        flexDirection: "column", // Ensure buttons stack vertically
        alignItems: "center",
    },
    button: {
        ...baseButton,
        width: "250px",
        background: "linear-gradient(to bottom, #4A90E2, #0066cc)",
    },
    optionButton: baseButton,
    optionButtonBlue: { background: "linear-gradient(to bottom, #0A61B3, #0A61B370)" },
    optionButtonGreen: { background: "linear-gradient(to bottom, #018B93, #018B9370)" },
    optionButtonOrange: { background: "linear-gradient(to bottom, #E27409, #E2740970)" },
    optionButtonRed: { background: "linear-gradient(to bottom, #E12A67, #E12A6770)" },
    optionHover: {
        transform: "scale(1.04)",
        boxShadow: "0px 0px 100px rgba(255, 255, 255, 0.8)",
        transition: "transform 2s ease-in-out, box-shadow 2s ease-in-out",
        border: "2px solid white",
    },
    correctAnswer: {
        background: "linear-gradient(to bottom, #4CAF50, #2E7D32)", // Green gradient
        boxShadow: "0px 5px 15px rgba(0, 255, 0, 0.8)",
    },

    wrongAnswer: {
        background: "linear-gradient(to bottom, #D32F2F, #B71C1C)", // Red gradient
        boxShadow: "0px 5px 15px rgba(255, 0, 0, 0.8)",
    },
};

export default styles;
