import React from "react";
import ArtistsItem from "./Item";

const ArtistsList = ({ artists }) => {
    return  <div style={{display:"flex",flexWrap:"wrap"}}>
        {artists.items.map((artist, id) => {
            const artistObj = {
                name: artist.name,
                link: artist.external_urls.spotify,
                genres: artist.genres,
                image: artist.images[0] ? artist.images[0].url : "",
            };
            return <ArtistsItem artist={artistObj} key={id} />;
        })}
    </div>;
};

export default ArtistsList;
