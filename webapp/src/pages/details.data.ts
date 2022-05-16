import type { RouteDataFunc } from 'solid-app-router';
import { createResource } from 'solid-js';

import { getPokemonDetails } from '../services/pokemon';

export const detailsData: RouteDataFunc = ({ params })  => {
  const [pokemonDetails] = createResource(()  => params.name, getPokemonDetails); 
  return pokemonDetails;
}