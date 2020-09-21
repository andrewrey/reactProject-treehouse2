import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";

class Player extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    id: PropTypes.number,
    score: PropTypes.number,
    removePlayer: PropTypes.func,
    updateScore: PropTypes.func,
    index: PropTypes.number,
  };

  render() {
    let { name, id, score, removePlayer, updateScore, index } = this.props;
    console.log(name);
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>
            ✖
          </button>
          {name}
        </span>

        <Counter score={score} updateScore={updateScore} index={index} />
      </div>
    );
  }
}

export default Player;
