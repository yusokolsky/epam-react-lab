import React from "react";
import AlbumItem from "./Item";

const AlbumsLists = ({ albums  }) => {
    return  <div style={{display:"flex",flexWrap:"wrap"}}>
        {albums.items.map((album, id) => {
            const albumObj = {
                image: album.images[0].url,
                link: album.external_urls.spotify,
                name: album.name,
                tracksCount: album.total_tracks,
                year: Number(album.release_date.slice(0, 4)),
                artists: album.artists.map((artist, id) => (
                    <a href={artist.external_urls.spotify} key={id}>
                        {artist.name}
                    </a>
                )),
            };
            return <AlbumItem album={albumObj} key={id} />;
        })}
    </div>;
};

export default AlbumsLists;
