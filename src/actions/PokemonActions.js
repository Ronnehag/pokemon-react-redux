import { FETCH_POKEMONS, FILTER_POKEMONS, FETCH_TYPES } from './types';
import Pokemon from '../models/Pokemon'

export const fetchPokemons = () => {
    const pokemons = JSON.parse(localStorage.getItem("pokeList"));
    return async function (dispatch) {
        if (pokemons !== null) {
            dispatch({ type: FETCH_POKEMONS, payload: pokemons });
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
                    const { types } = await response.json();
                    let pokemon = new Pokemon(id, name, types, url);
                    pokemonArr.push(pokemon);
                }
            }
            mainArr = [...mainArr, ...pokemonArr];
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

export const filterPokemons = (text) => {
    return function (dispatch) {
        dispatch({ type: FILTER_POKEMONS, text: text });
    }
}

export const fetchTypes = () => {
    return async function (dispatch) {
        const res = await fetch("https://pokeapi.co/api/v2/type/");
        const json = await res.json();
        dispatch({ type: FETCH_TYPES, payload: json.results });
    }
}

export const filterByTypes = (url) => {

}