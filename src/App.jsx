import React from "react";
import "./App.scss";
import Header from "./components/header";
import SearchWrapper from "./components/searchWrapper";

const App = props => {
  return (
    <div data-test="AppComponent">
      <Header />
      <SearchWrapper />
    </div>
  );
};

export default App;
