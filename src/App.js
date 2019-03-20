import React, { Component } from 'react';

import PokemonSearch from './components/PokemonSearch';
import PokemonDeck from './components/PokemonDeck';
import FilterButtons from './components/FilterButtons';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <PokemonSearch />
        <FilterButtons />
        <PokemonDeck />
      </div>
    );
  }
}

export default App;
