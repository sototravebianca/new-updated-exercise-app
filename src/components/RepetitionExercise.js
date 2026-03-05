import React, { useState} from "react";

export default function RepetitionExercise({ name, goHome, image }) {
    const [reps, setReps] = useState(0);
  const targetReps = 20;

  const addRep = () => {
    if (reps < targetReps) {
      setReps(reps + 1);
    }
  };

  const reset = () => {
    setReps(0);
  };

  return (
    <div className="exercise-card">

      <h2>Push Ups</h2>

      <div className="progress-circle">

        <svg width="180" height="180">

          <circle
            cx="90"
            cy="90"
            r="70"
            stroke="#5d6084"
            strokeWidth="10"
            fill="none"
        
          />

        </svg>

        <div className="progress-text">
          {reps}/{targetReps}
        </div>

      </div>

      <button onClick={addRep}>Add Rep</button>
      <button onClick={reset}>Reset</button>


      <br />

      <button onClick={goHome} style={{ marginTop: 15 }}>
        Return to Home
      </button>
    </div>
);
}