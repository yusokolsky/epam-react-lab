import React from "react";
import PropTypes from "prop-types";
import millisToMinutesAndSeconds from "../../utils/milisecondsToDisplayTime";

const TrackItem = ({ track, key }) => {
  return (
    <div
      style={{
        width: 200,
        border: 2,
        borderColor: "lightgray",
        borderStyle: "solid",
      }}
      key={key}
    >
      <img src={track.album.image} width={200} alt={"track "+track.name}/>
        Name:<a href={track.link}> {track.name}</a>
        <br />
        Album: <a href={track.album.href}>{track.album.name}</a>
        <br />
      <div>length: {millisToMinutesAndSeconds(track.lengthString)}</div>
      <div>popularity: {track.popularity}</div>
      <div>

        <span>
            Artists:
            {track.artists}
        </span>
      </div>
    </div>
  );
};

TrackItem.propTypes = {
  track: PropTypes.shape({
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    lengthString: PropTypes.string.isRequired,
    popularity: PropTypes.number.isRequired,
    album: PropTypes.shape({ image: PropTypes.string, name: PropTypes.string })
      .isRequired,
    artists: PropTypes.array.isRequired,
  }).isRequired,
};

export default TrackItem;
