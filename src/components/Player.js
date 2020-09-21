import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";
import Crown from "./Crown";

class Player extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    id: PropTypes.number,
    score: PropTypes.number,
    removePlayer: PropTypes.func,
    updateScore: PropTypes.func,
    index: PropTypes.number,
    hasHighScore: PropTypes.bool,
  };

  render() {
    let { name, id, score, removePlayer, updateScore, index, hasHighScore } = this.props;
    console.log(name);
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>
            ✖
          </button>
          <Crown hasHighScore={hasHighScore} />
          {name}
        </span>

        <Counter score={score} updateScore={updateScore} index={index} />
      </div>
    );
  }
}

export default Player;
