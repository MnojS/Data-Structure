// /src/App.js
import React, { useState } from 'react';
import Cube from './component/Cube';
import './App.css';

const App = () => {
  const [cubes, setCubes] = useState([
    { id: 1, value: 2 },
    { id: 2, value: 4 },
    { id: 3, value: 8 },
    { id: 4, value: 2 },
  ]);

  // Function to handle when a cube is clicked
  const handleClick = (index) => {
    // Check the current cube value
    const selectedCube = cubes[index];
    let updatedCubes = [...cubes];

    // Check if it can consume adjacent cubes (simplified for neighboring cubes)
    for (let i = 0; i < updatedCubes.length; i++) {
      if (i !== index && selectedCube.value >= updatedCubes[i].value) {
        // Merge cubes if the current cube can consume the other cube
        selectedCube.value += updatedCubes[i].value;
        updatedCubes.splice(i, 1); // Remove the consumed cube
        break;
      }
    }

    // Update the cubes state
    setCubes(updatedCubes);
  };

  return (
    <div className="game-board">
      {cubes.map((cube, index) => (
        <Cube
          key={cube.id}
          value={cube.value}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default App;
