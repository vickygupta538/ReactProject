import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { connect } from "react-redux";

const getSectionView = characterDetails => {
  if (!characterDetails) return null;
  const { hair_color, skin_color, eye_color, birth_year, gender, name } = characterDetails;
  return (
    <section data-test="SearchResultDetailViewComponent">
      <h2>{name}</h2>
      <div className="attributeHeading">Hair Color</div>
      <div className="attributeContent">{hair_color}</div>
      <div className="attributeHeading">Skin Color</div>
      <div className="attributeContent">{skin_color}</div>
      <div className="attributeHeading">Eye Color</div>
      <div className="attributeContent">{eye_color}</div>
      <div className="attributeHeading">Birth Year</div>
      <div className="attributeContent">{birth_year}</div>
      <div className="attributeHeading">Gender</div>
      <div className="attributeContent">{gender}</div>
    </section>
  );
};

const SearchResultDetailView = ({ characterDetails }) => {
  return <section className="searchResultDetailView">{getSectionView(characterDetails)}</section>;
};

const mapStateToProps = ({ characters, selectedCharacterIndex }) => ({
  characterDetails: characters[selectedCharacterIndex]
});

SearchResultDetailView.propTypes = {
  characterDetails: PropTypes.shape({
    hair_color: PropTypes.string.isRequired,
    skin_color: PropTypes.string.isRequired,
    eye_color: PropTypes.string.isRequired,
    birth_year: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })
};

export default connect(mapStateToProps)(SearchResultDetailView);
