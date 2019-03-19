import React, { Component } from 'react'

export default class FilterButtons extends Component {

  state = {
    buttons: [
      { name: "fire", value: "Fire" },
      { name: "grass", value: "Grass" },
      { name: "rock", value: "Rock" },
      { name: "water", value: "Water" },
      { name: "ice", value: "Ice" },
      { name: "ghost", value: "Ghost" },
      { name: "flying", value: "Flying" },
      { name: "psychic", value: "Psychic" },
      { name: "metal", value: "Metal" },
      { name: "bug", value: "Bug" },
      { name: "fighting", value: "Fighting" },
      { name: "dragon", value: "Dragon" },
      { name: "normal", value: "Normal" },
    ]
  }

  renderBtns = () => {
    return this.state.buttons.map(button => {
      return (
        <div>
          <label>{button.value}</label>
          <input type="checkbox" name={button.name} value={button.value} />
        </div>
      )
    });
  }



  render() {
    return (
      <div className="container">
        {this.renderBtns()}
        <button>Clear</button>
      </div>
    )
  }
}
