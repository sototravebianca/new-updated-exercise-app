import React, { useState } from "react";
import "./App.css";
import DurationExercise from "./components/DurationExercise";
import RepetitionExercise from "./components/RepetitionExercise";
import DistanceExercise from "./components/DistanceExercise";
import squat from "./images/squat.jpg";
import plank from "./images/planks.jpg";
import wallSits from "./images/wall-sits.jpg";
import running from "./images/running.avif";
import cycling from "./images/cycling.jpg";
import pushup from "./images/pushup.avif";


export default function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const exercises = [
    { name: "Push Ups",
      image: pushup, 
      type: "repetition"
    },
    
      { name: "Squats", 
      type: "repetition",
      image: squat
    },
    
    { name: "Plank", 
      type: "duration",
      image: plank 
    },
    
    { name: "Wall Sit", 
      type: "duration",
      image: wallSits 
    },
    
    { name: "Running", 
      type: "distance",
      image: running
    },
    { name: "Cycling", 
      type: "distance",
      image: cycling
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