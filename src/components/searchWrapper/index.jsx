import React from "react";
import "./style.scss";
import SearchContainer from "../searchContainer/";
import SearchResultDetailView from "../searchResultDetailView";

const SearchWrapper = props => {
  return (
    <section data-test="SearchWrapperComponent" className="searchWrapper">
      <SearchContainer />
      <SearchResultDetailView />
    </section>
  );
};

export default SearchWrapper;
