import React, { Component } from "react";
import "./App.css";
import getSSOCode from "./utils/getSSOCode";
import setTokenToStorage from "./utils/setTokenToStorage";
import getTokenFromStorage from "./utils/getTokenFromStorage";
import {
  REDIRECT_URL,
  SPOTIFY_AUTH_URL,
  SPOTIFY_CLIENT_ID,
} from "./utils/const";
import {ALBUMS, ARTIST, PLAYLIST, TRACK} from "./utils/MOCK_DATA";
import Header from "./Components/Header/Header";
import SearchForm from "./Components/SearchForm/SearchForm";
import ArtistsList from "./Components/Artists/List";
import TrackList from "./Components/Track/List";
import PlayLists from "./Components/Playlists/List";
import AlbumsLists from "./Components/Albums/List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
      userData: {},
    };
  }

  componentDidMount() {
    let token = getSSOCode();
    if (token) setTokenToStorage(token);
    else token = getTokenFromStorage();
    if (token) {
      fetch(`https://api.spotify.com/v1/me`, {
        headers: { Authorization: "Bearer " + token },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.error && data.error.status === 401) {
            this.logOut();
          } else
            this.setState({
              auth: true,
              userData: data,
            });
        });
    }
  }

  spotifyAuth() {
    window.location = `${SPOTIFY_AUTH_URL}?client_id=${SPOTIFY_CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URL}`;
  }
  logOut() {
    window.localStorage.removeItem("SPOTIFY_TOKEN_KEY");
    window.location = "/";
  }
  render() {
    const { userData } = this.state;
    return (
      <div className="App">
        <Header
          isAuth={this.state.auth}
          userData={userData}
          spotifyAuth={this.spotifyAuth}
        />
        <div className="content">
          {!this.state.auth && (
            <button onClick={this.spotifyAuth}>Spotify log in</button>
          )}
          {this.state.auth && (
            <>
              <h1>Logged in as </h1>
              <img
                id="avatar"
                width="200"
                src={userData.images[0].url}
                alt="you face"
              />
              <div>
                <div>Display name {userData.display_name}</div>
                <div>Your ID {userData.id}</div>
                <div>Type {userData.type}</div>
                <div>Spotify URI {userData.uri}</div>
                <a href={userData.external_urls.spotify}>Link to profile</a>
              </div>
              <button onClick={this.logOut}>Log out</button>

              <SearchForm />
              Artists(search Eminem) <ArtistsList artists={ARTIST.artists} />
              Tracks(search Eminem) <TrackList tracks={TRACK}/>
              Playlists(search Eminem) <PlayLists playlists={PLAYLIST} />
              Albums(search Eminem) <AlbumsLists albums={ALBUMS} />
            </>
          )}
        </div>
      </div>
    );
  }
}

export default App;
