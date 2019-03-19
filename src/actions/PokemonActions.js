import { FETCH_POKEMONS } from './types';



export const fetchPokemons = () => {
    const pokemons = JSON.parse(localStorage.getItem("pokeList"));
    return async function (dispatch) {
        if (pokemons !== null) {
            dispatch({ type: FETCH_POKEMONS, payload: pokemons });
        } else {
            await fetchData("https://pokeapi.co/api/v2/pokemon", (data) => {
                localStorage.setItem("pokeList", JSON.stringify(data));
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
            mainArr = [...mainArr, ...data.results];
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