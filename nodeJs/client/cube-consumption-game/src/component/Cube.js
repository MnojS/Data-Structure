// /src/components/Cube.js
import React from 'react';
import '../Cube.css';

const Cube = ({ value, onClick, style }) => {
  return (
    <div className="cube" style={style} onClick={onClick}>
      {value}
    </div>
  );
};

export default Cube;
