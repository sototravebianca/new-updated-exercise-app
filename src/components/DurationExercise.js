import React, { useState, useRef, useEffect } from "react";

export default function DurationExercise({ name, image, goHome }) {

  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const formatTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;

    return `${String(mins).padStart(2, "0")} : ${String(secs).padStart(2, "0")}`;
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const startTimer = () => setIsRunning(true);

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <div>

      <h2>{name}</h2>

      <img src={image} alt={name} className="exercise-image"/>

      <p>Timer</p>

      <div className="timer-box">
        {formatTime(seconds)}
      </div>

      {!isRunning && <button onClick={startTimer}>▶ Start</button>}
      {isRunning && <button onClick={stopTimer}>⏸ Stop</button>}

      <button onClick={resetTimer}>⟲ Reset</button>

      <br/>

      <button onClick={goHome} className="back-button">
        ← Back
      </button>

    </div>
  );
}