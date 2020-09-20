import React from "react";
import PropTypes from "prop-types";

const Counter = ({ score, updateScore, index }) => {
  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={() => updateScore(index, -1)}>
        -
      </button>
      <span className="counter-score">{score}</span>
      <button className="counter-action increment" onClick={() => updateScore(index, 1)}>
        +
      </button>
    </div>
  );
};

Counter.propTypes = {
  index: PropTypes.number,
  score: PropTypes.number,
  updateScore: PropTypes.func,
};
export default Counter;
