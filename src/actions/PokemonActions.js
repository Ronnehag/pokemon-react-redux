import { FETCH_POKEMONS, FILTER_POKEMONS, FETCH_TYPES, ADD_FILTER_BY_TYPES, REMOVE_FILTER_BY_TYPES } from './types';
import Pokemon from '../models/Pokemon'

export const fetchPokemons = () => {
    const pokemons = JSON.parse(localStorage.getItem("pokeList"));
    return async function (dispatch) {
        if (pokemons !== null) {
            let pokemonsArr = [];
            pokemons.forEach(pokemon => {
                let pokeTypes = [];
                for (let key in pokemon.types) {
                    pokeTypes.push(pokemon.types[key]);
                }
                let poke = new Pokemon(pokemon.id, pokemon.name, pokeTypes, pokemon.url,
                    pokemon.base_experience, pokemon.sprites, pokemon.stats, pokemon.weight, pokemon.height);
                pokemonsArr.push(poke);
            });
            dispatch({ type: FETCH_POKEMONS, payload: pokemonsArr });
        } else {
            await fetchData("https://pokeapi.co/api/v2/pokemon", (data) => {
                localStorage.setItem("pokeList", JSON.stringify(data.slice(0, 807)));
                dispatch({ type: FETCH_POKEMONS, payload: data.slice(0, 807) });
            });
        }
    }
}

let mainArr = [];
async function fetchData(url, cb) {
    try {
        const res = await fetch(url);
        const data = await res.json();
        if (data.results.length) {
            let pokemonArr = [];
            for (let key in data.results) {
                const { name, url } = data.results[key];
                if (url !== null) {
                    const id = url.split("/pokemon/")[1].replace("/", "");
                    const response = await fetch(url);
                    const dat = await response.json();
                    const { types, base_experience, sprites, stats, weight, height } = dat;
                    let pokeTypes = [];
                    for (let key in types) {
                        pokeTypes.push(types[key].type.name);
                    }
                    let pokemon = new Pokemon(id, name, pokeTypes, url, base_experience, sprites, stats, weight, height);
                    pokemonArr.push(pokemon);
                }
            }
            mainArr.push(...pokemonArr);
            if (mainArr.length === 807) cb(mainArr);
            if (data.next !== null) {
                await fetchData(data.next);
            }
        }
    } catch (err) {
        console.log(err);
    } finally {
        cb(mainArr);
    }
}

export const filterPokemons = (text) => dispatch => {
    dispatch({ type: FILTER_POKEMONS, text: text });
}

export const fetchTypes = () => {
    return async function (dispatch) {
        const res = await fetch("https://pokeapi.co/api/v2/type/");
        const json = await res.json();
        dispatch({ type: FETCH_TYPES, payload: json.results });
    }
}

export const addTypeFilter = (type) => {
    return function (dispatch) {
        dispatch({ type: ADD_FILTER_BY_TYPES, payload: type })
    }
}

export const removeTypeFilter = (type) => {
    return function (dispatch) {
        dispatch({ type: REMOVE_FILTER_BY_TYPES, payload: type })
    }
}