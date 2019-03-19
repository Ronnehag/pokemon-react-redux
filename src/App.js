import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import PokemonSearch from './components/PokemonSearch';
import PokemonDeck from './components/PokemonDeck';
import FilterButtons from './components/FilterButtons';

class App extends Component {

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

export default App;
