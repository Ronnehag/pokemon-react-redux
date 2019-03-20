import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PokemonInfo from './components/PokemonInfo';

const routes = (

    <Router>
        <Provider store={store}>
            <Route exact path="/" component={App} />
            <Route path={`/pokemon/:name`} component={PokemonInfo} />
        </Provider>
    </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
