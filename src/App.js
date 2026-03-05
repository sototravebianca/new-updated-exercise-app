import React, { useState } from "react";
import "./App.css";
import DurationExercise from "./components/DurationExercise";
import RepetitionExercise from "./components/RepetitionExercise";
import DistanceExercise from "./components/DistanceExercise";


export default function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const exercises = [
    { name: "Push Ups", 
      type: "repetition",
      image: "/images/pushup.avif" 
    },
    
      { name: "Squats", 
      type: "repetition",
      image: "/images/squat.jpg" 
    },
    
    { name: "Plank", 
      type: "duration",
      image: "/images/planks.jpg" 
    },
    
    { name: "Wall Sit", 
      type: "duration",
      image: "/images/wall-sits.jpg" 
    },
    
    { name: "Running", 
      type: "distance",
      image: "/images/running.avif"
    },
    { name: "Cycling", 
      type: "distance",
      image: "/images/cycling.jpg"
    }
  ];

  return (
    <div className="app-container">
      

      <div className="app-header">
       <span className="header-icon">=</span>
       <span className="header-title">Exercises</span>
       <span className="header-icon">👤</span>
      </div>

      {/* MENU */}
      {!selectedExercise &&
      exercises.map((exercise) => (
        <div
        key={exercise.name}
        className="exercise-card"
        onClick={() => setSelectedExercise(exercise)}
        >
          <img src={exercise.image} alt={exercise.name}/>
          <h3>{exercise.name}</h3>
          </div>
      ))}

      {/*Exercise Content Wrapper*/}
      {selectedExercise && (
        <div className="exercise-content">

          {selectedExercise.type === "repetition" && (
            <RepetitionExercise
            name={selectedExercise.name}
            image={selectedExercise.image}
            goHome={() => setSelectedExercise(null)}
            />
          )}
          
          {selectedExercise.type === "duration" && (
            <DurationExercise
            name={selectedExercise.name}
            image={selectedExercise.image}
            goHome={() => setSelectedExercise(null)}
            />
          )}

          {selectedExercise.type === "distance" && (
            <DistanceExercise
            name={selectedExercise.name}
            image={selectedExercise.image}
            goHome={() => setSelectedExercise(null)}
            />
          )}

          </div>
      )}
        </div>
  );
}