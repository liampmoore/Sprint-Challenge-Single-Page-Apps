import React, {useState, useEffect} from "react";
import {Route} from 'react-router-dom';
import axios from 'axios';

import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import CharacterList from "./components/CharacterList.js";


export default function App() {

  const [characters, setCharacters] = useState([]);
  const [charactersQuery, setCharactersQuery] = useState('');
  const [charactersPage, setCharactersPage] = useState(1);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${charactersQuery ? `?name=${charactersQuery}`:''}${charactersQuery ? `&page=${charactersPage}`: ''}`)
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
    <main>
      <Header />
      <Route exact path='/'>
        <WelcomePage  />
      </Route>
      <Route path='/characters'>
      <CharacterList characters={characters} charactersQuery={charactersQuery} setCharactersQuery={setCharactersQuery}/>
      </Route>
    </main>
  );
}
