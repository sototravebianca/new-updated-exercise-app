import { useState } from "react";

export default function DistanceExercise({ name, goHome, image }) {
    const [distance, setDistance] = useState(0);

        <img src={image} className="exercise-image" alt={name} />

    return (
        <div>
            <h2>{name}</h2>
            
            <div className="rep-circle">
            {distance} miles
            </div>

            <button onClick={() => setDistance(distance + 1)}>
                Add Mile
            </button>

            <button onClick={() => setDistance(0)} style={{ margin: 5 }}>
                Reset
            </button>

            <br />

            <button onClick={goHome} style={{ marginTop: 15 }}>
                Return to Home
            </button>
            </div>
    );
}