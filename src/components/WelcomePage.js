import React from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Welcome = styled.section`
  margin: 0 auto;
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {margin-left: 5%;
    a {
      text-decoration: none;
      font-size: 1rem;
    }
  }
  img {border-radius: 10px}
`;

export default function WelcomePage() {
  return (
    <Welcome className="welcome-page">
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <div><h2>Welcome to the ultimate fan site!</h2>
        <Link to='/characters'>Click here to search a list of Rick and Morty characters.</Link></div>
    </Welcome>
  );
}
