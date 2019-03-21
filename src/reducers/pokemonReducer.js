import { FETCH_POKEMONS, FILTER_POKEMONS, FETCH_TYPES, ADD_FILTER_BY_TYPES, REMOVE_FILTER_BY_TYPES } from '../actions/types';

const initialState = {
    pokemonList: [],
    filter: "",
    checkedFilterButtons: [],
    types: [],
    pokemon: ""
}

export default function (state = initialState, action) {
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
        case ADD_FILTER_BY_TYPES:
            return {
                ...state,
                checkedFilterButtons: [...state.checkedFilterButtons, action.payload]
            }

        case REMOVE_FILTER_BY_TYPES:
            return {
                ...state,
                checkedFilterButtons: [...state.checkedFilterButtons.filter(type => type !== action.payload)]
            }

        default:
            return state;
    }
}