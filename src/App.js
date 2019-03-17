import React, { Component } from 'react';
import PokemonSearch from './components/PokemonSearch';
import PokemonDeck from './components/PokemonDeck';
import FilterButtons from './components/FilterButtons';

class App extends Component {

  state = {
    pokemons: [],
    filter: "",
    selectedType: ""
  }

  filterPokemons = (e) => {
    this.setState({ filter: e.target.value });
  }

  selectedRadioBtn = (e) => {
    this.setState({ selectedType: e.target.value });
  }

  // Fetches all pokemons from API
  async fetchPokemons(url) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.results);
      if (data.results.length) {
        this.setState({
          pokemons: [...this.state.pokemons, ...data.results]
        });
        await this.fetchPokemons(data.next);
      }
    } catch (err) {
      // Err handeling later if needed. Will catch data.next not containing any more data
    }
  }

  // Check if pokemons are cached, else fetch them and cache them in localstorage
  async componentDidMount() {
    let pokemons = localStorage.getItem("pokemons");
    if (pokemons === null) {
      await this.fetchPokemons("https://pokeapi.co/api/v2/pokemon");
      localStorage.setItem("pokemons", JSON.stringify(this.state.pokemons));
    } else {
      this.setState({
        pokemons: JSON.parse(pokemons)
      });
    }
  }



  render() {
    const pokemons = this.state.pokemons.slice(0, 807);
    return (
      <div className="wrapper">
        <PokemonSearch search={this.filterPokemons} />
        <FilterButtons selected={this.selectedRadioBtn} />
        <PokemonDeck pokeList={pokemons} filter={this.state.filter} filterType={this.state.selectedType} />
      </div>
    );
  }
}

export default App;
