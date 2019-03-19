import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPokemons} from '../actions/PokemonActions';
import PokemonCard from './PokemonCard'

export class PokemonDeck extends Component {

  componentDidMount() {
    this.props.fetchPokemons();
  }

  fetchSprite = (url) => {
    let id = url.split("/pokemon/")[1].replace("/", "");
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }
  pokeList = () => {
    return this.props.pokemons.length ? (
      this.props.pokemons
        .filter(pokemon => pokemon.name.startsWith(this.props.filter))
        .map((pokemon) => {
          const { name, url,id } = pokemon;
          return (<PokemonCard key={id} name={name} img={this.fetchSprite(url)} id={id} />);
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

PokemonDeck.propTypes = {
  fetchPokemons: PropTypes.func.isRequired,
  pokemons: PropTypes.array.isRequired,
  filter: PropTypes.string
}

const mapStateToProps = (state) => ({
  pokemons: state.pokemons.pokemonList,
  filter: state.pokemons.filter
});

export default connect(mapStateToProps, { fetchPokemons })(PokemonDeck);
