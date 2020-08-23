import React from "react";
import PropTypes from "prop-types";

const PlaylistItem = ({ playlist, key }) => {
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
        <div>
            <img src={playlist.image} width={200} alt={"playlist "+playlist.name}/>
            Name; <a href={playlist.link}>{playlist.name}</a><br/>
            Owner: <a href={playlist.owner.link}>{playlist.owner.name}</a><br/>
            <div> Tracks Count :{playlist.tracksCount}</div>
        </div>
    </div>
  );
};


PlaylistItem.propTypes = {
    playlist: PropTypes.shape({
        image: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        tracksCount: PropTypes.number.isRequired,
        owner: PropTypes.shape({
            name: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};

export default PlaylistItem;
