import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { fetchPokemons } from '../actions/PokemonActions';
import PokemonCard from './PokemonCard'

export class PokemonDeck extends Component {

  componentDidMount() {
    this.props.fetchPokemons();
  }

  containsAllTypes = ({ types }) => {

    return this.props.types.every(type => types.includes(type));
  }

  fetchSprite = (url) => {
    let id = url.split("/pokemon/")[1].replace("/", "");
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

  pokeList = () => {
    let pokemonList = this.props.pokemons;
    if (this.props.pokemons.length > 0) {
      if (this.props.filter !== "") {
        pokemonList = this.props.pokemons.filter(pokemon => pokemon.name.startsWith(this.props.filter));
      }
      if (this.props.types.length > 0) {
        pokemonList = this.props.pokemons.filter(pokemon => this.containsAllTypes(pokemon))
      }
    } else {
      return (<div>Loading...</div>)
    }

    return pokemonList.map(pokemon => {
      const { name, url, id } = pokemon;
      return (
        <Link to={`/pokemon/${name}`}>
          <PokemonCard key={id} name={name} img={this.fetchSprite(url)} id={id} />
        </Link>
      )
        ;
    });
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
