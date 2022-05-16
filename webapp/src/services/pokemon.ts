  import type { PokemonDetails } from '../types/PokemonDetails';
import type { PokemonQueryResult } from '../types/PokemonQueryResult';

const baseURL = 'https://pokeapi.co/api/v2/';

const URL = {
  getPokemonDetails: (name: string) => `${baseURL}/pokemon/${name}`, 
  getManyPokemon: (limit: number, offset: number) => `${baseURL}/pokemon?limit=${limit}&offset=${offset}`
}

const makeRequest = <T>(url: string) => fetch(url, {
  mode: 'no-cors',
}).catch(console.error).then(resp => resp?.text() as T | void);

export const getPokemonDetails = (name: string) => makeRequest<PokemonDetails>(URL.getPokemonDetails(name));
export const getAllPokemon = () => makeRequest<PokemonQueryResult>(URL.getManyPokemon(-1, 0));
