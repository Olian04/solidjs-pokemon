import { Component, lazy } from "solid-js";
import { Routes, Route, Navigate } from "solid-app-router";

import { detailsData } from "./pages/details.data";
import DetailsPage from "./pages/details.page";
import SearchPage from "./pages/search.page";
import { Heading } from "./components/Heading";

const App: Component = () => {
  return (
    <div class="m-0 h-screen w-screen p-0">
      <Heading />
      <Routes>
        <Route path="/" component={SearchPage} />
        <Route
          path="/pokemon/:name"
          component={DetailsPage}
          data={detailsData}
        />
      </Routes>
    </div>
  );
};

export default App;
