import React from "react";
import PlaylistItem from "./Item";

const PlayLists = ({ playlists  }) => {
    return  <div style={{display:"flex",flexWrap:"wrap"}}>
        {playlists.items.map((playlist, id) => {
            const playlistObj = {
                image: playlist.images[0].url,
                link: playlist.external_urls.spotify,
                name: playlist.name,
                tracksCount: playlist.tracks.total,
                owner: {
                    name: playlist.owner.display_name,
                    link: playlist.owner.external_urls.spotify,
                },
            };
            return <PlaylistItem playlist={playlistObj} key={id} />;
        })}
    </div>;
};

export default PlayLists;
