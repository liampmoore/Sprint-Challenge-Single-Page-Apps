import React from "react";

import CharacterCard from './CharacterCard';

export default function CharacterList({characters, setCharacters, query, setQuery}) {
  // TODO: Add useState to track data from useEffect
  

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
