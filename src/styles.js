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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "linear-gradient(to bottom, #7B1FA2, #4A148C)",
    },
    cardContainer: {
        display: "flex",
        justifyContent: "space-around",
        width: "80%",
        marginTop: "20px",
    },
    card: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "30%",
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
        cursor: "pointer",
        transition: "transform 0.2s",
        ":hover": {
            transform: "scale(1.05)",
        },
    },
    cardImage: {
        width: "100%",
        height: "150px",
        objectFit: "cover",
        borderRadius: "10px",
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
