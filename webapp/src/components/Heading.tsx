import { NavLink, useNavigate } from "solid-app-router";
import { createSignal } from "solid-js";

import { MainLogo } from "./MainLogo";

export const Heading = () => {
  const navigate = useNavigate();
  const [pokemonQuery, setPokemonQuery] = createSignal("");

  return (
    <nav class="sticky m-0 box-border flex h-[50px] w-full items-center gap-5 bg-gradient-to-r from-white to-slate-600 p-5 pt-9 pb-7 drop-shadow-md">
      <NavLink
        href="/"
        title="Go back to landing page"
        onClick={() => setPokemonQuery("")}
      >
        <MainLogo />
      </NavLink>
      <input
        value={pokemonQuery()}
        type="text"
        class="m-0 w-full rounded-sm pl-1 text-2xl text-blue-800 ring-2 ring-blue-800"
        onChange={(ev) => {
          setPokemonQuery(ev.currentTarget.value.toLocaleLowerCase());
          navigate(`/pokemon/${ev.currentTarget.value.toLocaleLowerCase()}`);
        }}
      />
    </nav>
  );
};
