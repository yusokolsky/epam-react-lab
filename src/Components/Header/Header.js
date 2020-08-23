import React, { Component } from "react";
import "./Header.css";

class Header extends Component {


  componentDidMount() {}
  render() {
    const { userData } = this.props;
    return (
      <div className="header">
        {this.props.isAuth && (
          <>
            <div className="header-name">{userData.display_name}</div>
            <img
                className="header-photo"
              src={userData.images[0].url}
              alt="you face"
            />
          </>
        )}
        {!this.props.isAuth && (
            <div className="header-name">
            <button onClick={this.props.spotifyAuth}> Spotify log in</button>
            </div>
        )}
      </div>
    );
  }
}

export default Header;
