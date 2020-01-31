import React from "react";

import SearchForm from './SearchForm';
import CharacterCard from './CharacterCard';

export default function CharacterList({characters, charactersQuery, setCharactersQuery}) {
  


  return (
    <section className="character-list">
      <SearchForm query={charactersQuery} setQuery={setCharactersQuery}/>
      {characters.length > 0 || <p>No results</p>}
      {characters.map((character) => {
        return (
          <CharacterCard key={character.id} character={character} />
        )
      })}
    </section>
  );
}
