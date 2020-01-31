import React, { useEffect, useState } from "react";
import axios from 'axios';

import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axios.get('https://rickandmortyapi.com/api/character/')
      .then((res) => {
        console.log(res.data.results)
        setCharacters(res.data.results)
      })
      .catch(err => console.log(err))
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      {characters.map((character) => {
        return (
          <CharacterCard key={character.id} character={character} />
        )
      })}
    </section>
  );
}
