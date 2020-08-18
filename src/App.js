import React, { Component } from "react";
import "./App.css";
import getSSOCode from "./utils/getSSOCode";
import setTokenToStorage from "./utils/setTokenToStorage";
import getTokenFromStorage from "./utils/getTokenFromStorage";
import {REDIRECT_URL, SPOTIFY_AUTH_URL, SPOTIFY_CLIENT_ID} from "./utils/const";

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
          </>
        )}
      </div>
    );
  }
}

export default App;
