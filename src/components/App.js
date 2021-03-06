import React, { Component } from "react";
import Header from "./Header";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

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
  prevPlayerId = 4;

  getHighScore = () => {
    const scores = this.state.players.map((p) => p.score);
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    }
    return null;
  };

  handleRemovePlayer = (id) => {
    this.setState((prevState) => {
      return {
        players: prevState.players.filter((p) => p.id !== id),
      };
    });
  };

  handleAddPlayer = (name) => {
    this.setState((prevState) => ({ players: [...prevState.players, { name, id: (this.prevPlayerId += 1), score: 0 }] }));
  };

  // This creates new score state, but updates the score of the element because of referenced object on the heap stack
  handleScoreChange = (index, delta) => {
    this.setState((prevState) => ({
      score: (prevState.players[index].score += delta),
    }));
  };

  // This way just updates the player state with new score each time without adding a score state.
  // handleScoreChange = (index, delta) => {
  //   this.setState((prevState) => ({
  //     players: prevState.players.map((p, i) => (i === index ? { ...p, score: p.score + delta } : p)),
  //   }));
  // };

  render() {
    console.log("haha");
    let winningScore = this.getHighScore();
    let { players } = this.state;
    return (
      <div className="scoreboard">
        <Header players={players} />

        {/* Players list */}
        {players.map((player, index) => (
          <Player name={player.name} hasHighScore={winningScore === player.score} id={player.id} score={player.score} key={player.id.toString()} removePlayer={this.handleRemovePlayer} updateScore={this.handleScoreChange} index={index} />
        ))}
        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
