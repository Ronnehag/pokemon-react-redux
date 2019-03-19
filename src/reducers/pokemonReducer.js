import { FETCH_POKEMONS, FILTER_POKEMONS, FETCH_TYPES } from '../actions/types';

const initialState = {
    pokemonList: [],
    filter: "",
    checkedFilterButtons: [],
    types: []
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
        case FETCH_TYPES:
        return {
            ...state,
            types: action.payload
        }

        default:
            return state;
    }
}