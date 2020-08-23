import React from "react";
import PropTypes from "prop-types";

const ArtistsItem = ({ artist, key }) => {
  return (
    <div
      style={{
        width: 200,
        border: 2,
        borderColor: "black",
        borderStyle: "solid",
      }}
      key={key}
    >
      <img
        src={artist.image}
        width={200}
        alt={artist.name + " face"}
      />
      <div>
        <a href={artist.link}>{artist.name}</a>
        <br />
        {artist.genres.map((genre, key) => (
          <span key={key}>{genre} </span>
        ))}
      </div>
    </div>
  );
};

ArtistsItem.propTypes = {
  artist: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    image: PropTypes.string,
  }).isRequired,
};

export default ArtistsItem;
