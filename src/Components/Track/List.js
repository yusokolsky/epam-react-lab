import React from "react";
import TrackItem from "./Item";

const TrackList = ({ tracks }) => {
    return  <div style={{display:"flex",flexWrap:"wrap"}}>
        {tracks.items.map((track, id) => {
            const trackObj = {
                link: track.external_urls.spotify,
                name: track.name,
                lengthString: track.duration_ms,
                popularity: track.popularity,
                album: { image: track.album.images[0].url, name: track.album.name,href:track.album.href },
                artists: track.artists.map((artist, id) => (<>
                    <a href={artist.external_urls.spotify} key={id}>
                        {artist.name}
                    </a> </>
                )),
            };
            return <TrackItem track={trackObj} key={id} />;
        })}
    </div>;
};

export default TrackList;
