import React, { PureComponent } from "react";
import Counter from "./Counter";

class Player extends PureComponent {
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
