import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import PokemonSearch from './components/PokemonSearch';
import PokemonDeck from './components/PokemonDeck';
import FilterButtons from './components/FilterButtons';

class App extends Component {

  // state = {
  //   pokemons: [],
  //   filter: "",
  //   selectedType: ""
  // }

  // filterPokemons = (e) => {
  //   this.setState({ filter: e.target.value });
  // }

  // selectedRadioBtn = (e) => {
  //   this.setState({ selectedType: e.target.value });
  // }

  // // Fetches all pokemons from API
  // async fetchPokemons(url) {
  //   try {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     console.log(data.results);
  //     if (data.results.length) {
  //       this.setState({
  //         pokemons: [...this.state.pokemons, ...data.results]
  //       });
  //       await this.fetchPokemons(data.next);
  //     }
  //   } catch (err) {
  //     // Err handeling later if needed. Will catch data.next not containing any more data
  //   }
  // }


  render() {
    return (
      <Provider store={store}>
        <div className="wrapper">
          <PokemonSearch />
          <FilterButtons />
          <PokemonDeck />
        </div>
      </Provider>
    );
  }
}
// search={this.filterPokemons}
// selected={this.selectedRadioBtn}
// filter={this.state.filter} filterType={this.state.selectedType}


export default App;
