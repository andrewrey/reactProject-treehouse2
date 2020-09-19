import React, { Component } from "react";

class AddPlayerForm extends Component {
  state = {
    value: "",
  };
  handleValueChange = (e) => {
    this.setState({ value: e.target.value });
  };
  render() {
    let { value } = this.state;
    return (
      <form>
        <input type="text" value={value} onChange={this.handleValueChange} placeholder="Enter a player's name" />
        <input type="submit" value="Add Player" />
      </form>
    );
  }
}

export default AddPlayerForm;
