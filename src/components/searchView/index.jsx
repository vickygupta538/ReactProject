import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { searchCharacterRequested } from "../../actions";
import { connect } from "react-redux";

const SearchView = ({ dispatch }) => {
  const inputChange = event => {
    dispatch(searchCharacterRequested(event.target.value));
  };
  return (
    <section className="searchView" data-test="SearchViewComponent">
      <div>
        <strong>Search:</strong>
      </div>
      <input className="searchTextBox" type="input" onChange={inputChange} />
    </section>
  );
};
SearchView.propTypes = {
  dispatch: PropTypes.func.isRequired
};
export default connect()(SearchView);
