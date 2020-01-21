import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { connect } from "react-redux";
import SearchResultItem from "../searchResultItem";

const SearchResultView = props => {
  const { characters } = props;

  return characters.length > 0 ? (
    <section className="searchResultView" data-test="SearchResultViewComponent">
      <div>
        <strong>Characters:</strong>
      </div>
      {characters.map((character, _index) => {
        return <SearchResultItem index={_index} key={_index} {...character} />;
      })}
    </section>
  ) : null;
};
const mapStateToProps = ({ characters }) => ({
  characters
});

SearchResultView.propTypes = {
  characters: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(SearchResultView);
