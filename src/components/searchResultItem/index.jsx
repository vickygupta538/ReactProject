import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { updateSelectedCharacterIndex } from "../../actions";
import { connect } from "react-redux";

const SearchResultItem = props => {
  const { name, index, dispatch } = props;
  const onCharcterClicked = () => {
    dispatch(updateSelectedCharacterIndex(index));
  };
  return (
    <section className="searchResultItemWrapper" onClick={onCharcterClicked} data-test="SearchResultItemComponent">
      <button className="searchResultItem">{name}</button>
    </section>
  );
};

SearchResultItem.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect()(SearchResultItem);
