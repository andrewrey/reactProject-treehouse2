import React, { Component } from "react";
import Header from "./Header";
import Player from "./Player";

class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        id: 1,
        score: 0,
      },
      {
        name: "Treasure",
        id: 2,
        score: 0,
      },
      {
        name: "Ashley",
        id: 3,
        score: 0,
      },
      {
        name: "James",
        id: 4,
        score: 0,
      },
    ],
  };

  handleRemovePlayer = (id) => {
    this.setState((prevState) => {
      return {
        players: prevState.players.filter((p) => p.id !== id),
      };
    });
  };

  handleScoreChange = (index, delta) => {
    this.setState((prevState) => ({
      score: (prevState.players[index].score += delta),
    }));
  };

  render() {
    let { players } = this.state;
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" totalPlayers={players.length} />

        {/* Players list */}
        {players.map((player, index) => (
          <Player name={player.name} id={player.id} score={player.score} key={player.id.toString()} removePlayer={this.handleRemovePlayer} updateScore={this.handleScoreChange} index={index} />
        ))}
      </div>
    );
  }
}

export default App;
