import React from "react";
import "./style.scss";
import SearchView from "../searchView";
import SearchResultView from "../searchResultView";

const SearchContainer = props => {
  return (
    <section className="searchContainer" data-test="SearchContainerComponent">
      <center>
        <div>
          Search for your favourite Star Wars characters in the search box below. Click on their names to find out more
          information about them.
        </div>
        <SearchView />
        <SearchResultView />
      </center>
    </section>
  );
};

export default SearchContainer;
