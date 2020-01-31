import React from "react";
import styled from 'styled-components';

const RickHeader = styled.header`
  h1 { text-align: center;
  font-family: 'Pacifico', cursive;
  font-size: 3rem; }`

export default function Header() {
  return (
    <RickHeader className="ui centered">
      <h1 className="ui center">Rick n Morty Search Box</h1>
    </RickHeader>
  );
}
