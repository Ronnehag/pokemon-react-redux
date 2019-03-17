import React, { Component } from 'react'
import PokemonCard from './PokemonCard'

export class PokemonDeck extends Component {

  fetchSprite = (url) => {
    let id = url.split("/pokemon/")[1].replace("/", "");
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

  pokeList = () => {
    return this.props.pokeList.length ? (
      this.props.pokeList
        .filter(pokemon => pokemon.name.startsWith(this.props.filter))
        .map((pokemon, i) => {
          let img = this.fetchSprite(pokemon.url);
          return (<PokemonCard key={pokemon.name} name={pokemon.name} img={img} id={i + 1} />);
        })) : (<p>Loading Pokémons...</p>);
  }

  render() {
    return (
      <div className="container">
        {this.pokeList()}
      </div>
    )
  }
}

export default PokemonDeck
