import { useState, useEffect, useRef } from "react";

function useWordGame() {
    const [text, setText] = useState("");
    const [timeRemaining, setTimeRemaining] = useState(5);
    const [gameRunning, setGameRunning] = useState(false);
    const [wordCount, setWordCount] = useState(0);
    const inputRef = useRef(null);

    function handleChange(e) {
        const value = e.target.value
        setText(value)
    }

    function startClock() {
        setGameRunning(true);
        setTimeRemaining(5);
        setText("")
        inputRef.current.disabled = false;
        inputRef.current.focus();
    }

    function endGame() {
        setGameRunning(false);
        setWordCount(calculateWordCount(text));
    }

    useEffect(() => {
        if (gameRunning === true) {
            if (timeRemaining > 0) {
                setTimeout(() => {
                    setTimeRemaining(time => time - 1)
                }, 1000);
            } else if (timeRemaining === 0) {
                endGame()
            }
        }
    }, [timeRemaining, gameRunning])



    function calculateWordCount(text) {
        const wordsArr = text.trim().split(" ");
        return wordsArr.filter(word => word !== "").length;
    }

    return { inputRef, handleChange, text, gameRunning, timeRemaining, startClock, wordCount }
}

export default useWordGame;