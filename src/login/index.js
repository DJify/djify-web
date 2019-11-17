import React from 'react'
import styled from 'styled-components'

const S = {
  Container: styled.section`
    display: flex;
    flex-direction: column;
    background: var(--bg-gradient);
    align-items: center;
    justify-content: space-around;
    color: white;
    text-align: center;

    height: 100vh;

    > div {
      display: inherit;
      flex-direction: inherit;
      align-items: inherit;
    }

    h1 {
      margin-bottom: 0;
      font-weight: 500;
    }

    p {
      font-size: 12px;
      color: #ddd;
      padding: 0 75px;
    }
  `,
  SpoofyButton: styled.button`
    background: var(--spotify-green);
    color: white;
    display: flex;
    align-items: center;

    > img {
      width: 25px;
      height: 25px;
      margin-right: 1rem;
    }
  `,
  RockinOutImg: styled.img`
    width: 100%;
    max-width: 750px;
    height: auto;
  `,
}

const Login = () => (
  <S.Container>
    <S.RockinOutImg src="/rockin-out.gif" alt="DANCE DANCE" />
    <div>
      <img src="/icons/dj-general-icon.png" alt="DJ Silhouette" />
      <h1>
        <strong>DJ</strong>ify
      </h1>
      <p>Never listen to shit music again</p>
    </div>
    <div>
      <S.SpoofyButton>
        <img src="/icons/spoofy-logo.png" alt="Spotify logo" />
        Connect with Spotify
      </S.SpoofyButton>
      <p>Use your spotify account to access songs to play and listen.</p>
    </div>
  </S.Container>
)

export default Login
