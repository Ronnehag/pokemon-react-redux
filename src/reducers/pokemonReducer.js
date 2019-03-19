import { FETCH_POKEMONS, FILTER_POKEMONS } from '../actions/types';

const initialState = {
    pokemonList: [],
    filter: ""
}

export default function (state = initialState, action) {
    console.log(action.type);
    switch (action.type) {
        case FETCH_POKEMONS:
            return {
                ...state,
                pokemonList: action.payload
            }
        case FILTER_POKEMONS:
            return Object.assign({}, state, {
                filter: action.text
            });
        default:
            return state;
    }
}