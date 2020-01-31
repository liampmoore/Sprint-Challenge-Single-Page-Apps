import React, {useState, useEffect} from "react";
import {Route} from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import CharacterList from "./components/CharacterList.js";

const Main = styled.main`
width: 85vw;
min-height: 80vh;
max-width: 1024px;
margin: 35px auto;
background: rgb(170, 220, 205);
padding: 1.5% 3%;
box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
border-radius: 10px;
box-sizing: border-box;
`;



export default function App() {

  const [characters, setCharacters] = useState([]);
  const [charactersQuery, setCharactersQuery] = useState('');
  const [charactersPage, setCharactersPage] = useState(1);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/?${charactersQuery ? `name=${charactersQuery}`:''}${charactersQuery ? '&' : ''}${`page=${charactersPage}`}`)
      .then((res) => {
        console.log(res.data.results)
        setCharacters(res.data.results)
      })
      .catch(err => {
        console.log(err)
        setCharacters([])
      })
  }, [charactersQuery, charactersPage]);

  return (
    <Main>
      <Header />
      <Route exact path='/'>
        <WelcomePage  />
      </Route>
      <Route path='/characters'>
      <CharacterList characters={characters} charactersQuery={charactersQuery} setCharactersQuery={setCharactersQuery} charactersPage={charactersPage} setCharactersPage={setCharactersPage}/>
      </Route>
    </Main>
  );
}
