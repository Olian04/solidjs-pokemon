import { useRouteData } from "solid-app-router";
import { Resource } from "solid-js";
import { PokemonDetails } from "../types/PokemonDetails";

const DetailsPage = () => {
  const pokemon = useRouteData<Resource<PokemonDetails | undefined>>();
  return <h2>{JSON.stringify(pokemon())}</h2>;
};

export default DetailsPage;
