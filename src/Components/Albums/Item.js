import React from "react";
import PropTypes from "prop-types";

const AlbumItem = ({ album, key }) => {
  return (
    <div
      style={{
        width: 200,
        border: 2,
        borderColor: "lightgreen",
        borderStyle: "solid",
      }}
      key={key}
    >

        <div >
            <img src={album.image} width={200} alt={"album "+album.name}/>
            <div>
                Name: <a href={album.link}>{album.name}</a><br/>
                Artists: {album.artists}<br/>
            </div>
            <div>Tracks Count: {album.tracksCount}</div><br/>
            <div>Year: {album.year}</div>
        </div>


    </div>
  );
};


AlbumItem.propTypes = {
    album: PropTypes.shape({
        image: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        tracksCount: PropTypes.number.isRequired,
        year: PropTypes.number.isRequired,
        artists: PropTypes.array.isRequired,
    }).isRequired,
};

export default AlbumItem;
