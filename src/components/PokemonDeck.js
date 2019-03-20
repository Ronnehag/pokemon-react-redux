import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPokemons } from '../actions/PokemonActions';
import PokemonCard from './PokemonCard'

export class PokemonDeck extends Component {

  componentDidMount() {
    this.props.fetchPokemons();
  }

  fetchSprite = (url) => {
    let id = url.split("/pokemon/")[1].replace("/", "");
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

  // TODO filter if more than 1 type
  pokeList = () => {
    let pokemonList = this.props.pokemons;
    if (this.props.pokemons.length > 0) {
      if (this.props.filter !== "") {
        pokemonList = this.props.pokemons.filter(pokemon => pokemon.name.startsWith(this.props.filter));
      }
      if (this.props.types.length === 1) {
        pokemonList = this.props.pokemons.filter(pokemon => pokemon.types.some(t => this.props.types.indexOf(t) >= 0))
      }
    } else {
      return (<div>Loading...</div>)
    }

    return pokemonList.map(pokemon => {
      const { name, url, id } = pokemon;
      return (<PokemonCard key={id} name={name} img={this.fetchSprite(url)} id={id} />);
    });


    // return this.props.pokemons.length ? (
    //   this.props.pokemons
    //     .filter(pokemon => pokemon.name.startsWith(this.props.filter))
    //     .filter(pokemon => this.props.types.length ?
    //       pokemon.types.some(t => this.props.types.indexOf(t) >= 0) : -1)
    //     .map((pokemon) => {
    //       const { name, url, id } = pokemon;
    //       return (<PokemonCard key={id} name={name} img={this.fetchSprite(url)} id={id} />);
    //     })) : (<p>Loading Pokémons...</p>);
  }

  render() {
    return (
      <div className="container">
        {this.pokeList()}
      </div>
    )
  }
}

PokemonDeck.propTypes = {
  fetchPokemons: PropTypes.func.isRequired,
  pokemons: PropTypes.array.isRequired,
  filter: PropTypes.string,
  types: PropTypes.array
}

const mapStateToProps = (state) => ({
  pokemons: state.pokemons.pokemonList,
  filter: state.pokemons.filter,
  types: state.pokemons.checkedFilterButtons
});

export default connect(mapStateToProps, { fetchPokemons })(PokemonDeck);
