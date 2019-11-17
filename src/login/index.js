import React from 'react'

const Login = () => (
  <div>
    <div className="login-hero-wrapper">
      <img
        className="login-hero"
        src={require("../resources/img/rockin-out.gif")}
        alt="DANCE DANCE"/>
      <div className="login-hero-overlay"/>
    </div>
    <div className="login-body">
      <img
        src={require("../resources/img/icons/dj-general-icon.png")}
        alt="DJ Silhouette" />
      <h1>
        <strong>DJ</strong>ify
      </h1>
      <p>Never listen to shit music again</p>
    </div>
    <div>
      <button className="spotify-btn">
        <img
          style={{ height: 20, width: 20, marginRight: 8 }}
          src={require("../resources/img/icons/spoofy-logo.png")}
          alt="Spotify logo" />
        Connect with Spotify
      </button>
      <p>Use your spotify account to access songs to play and listen.</p>
    </div>
  </div>
)

export default Login
