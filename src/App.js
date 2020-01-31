import React, {useState, useEffect} from "react";
import {Route} from 'react-router-dom';

import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import CharacterList from "./components/CharacterList.js";


export default function App() {

  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState('');
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then((res) => {
        console.log(res.data.results)
        setCharacters(res.data.results)
      })
      .catch(err => console.log(err))
  }, [query]);

  return (
    <main>
      <Header />
      <Route exact path='/'>
        <WelcomePage  />
      </Route>
      <Route path='/characters'>
      <CharacterList characters={characters} setCharacters={setCharacters} query={query} setQuery={setQuery}/>
      </Route>
    </main>
  );
}
