import type { Component } from "solid-js";

import logo from "./assets/logo.svg";

const App: Component = () => {
  return (
    <div class="flex h-screen w-screen justify-center bg-slate-600">
      <img src={logo} alt="logo" class="w-[300px]" />
    </div>
  );
};

export default App;
