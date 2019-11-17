import React from 'react'

const Login = () => (
  <div style={{height: '100%'}}>
    <div className="login-hero-wrapper">
      <img
        className="login-hero"
        src={require("../resources/img/rockin-out.gif")}
        alt="DANCE DANCE"/>
      <div className="login-hero-overlay"/>
    </div>
    <div className="login-body">
      <img
        className="center"
        src={require("../resources/img/icons/dj-general-icon.png")}
        alt="DJ Silhouette" />
      <div style={{ marginTop: 20 }}>
        <button className="spotify-btn center" onClick={() => {
          window.location = window.location.href.includes('localhost')
          ? 'http://localhost:8888/login'
          : 'https://djify-backend.herokuapp.com/login'
        }}>
          <img
            style={{ height: 20, width: 20, marginRight: 8 }}
            src={require("../resources/img/icons/spoofy-logo.png")}
            alt="Spotify logo" />
          Connect with Spotify
        </button>
        <p className="disclaimer center">
          Use your Spotify account to access songs to play and listen.
        </p>
      </div>
    </div>
  </div>
)

export default Login
