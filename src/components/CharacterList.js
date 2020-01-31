import React from "react";

import SearchForm from './SearchForm';
import CharacterCard from './CharacterCard';

export default function CharacterList({characters, charactersQuery, setCharactersQuery, charactersPage, setCharactersPage}) {
  
  const nextPage = () => {
    setCharactersPage(charactersPage + 1)
  }
  const previousPage = () => {
    setCharactersPage(charactersPage - 1)
  }

  return (
    <section className="character-list">
      <SearchForm query={charactersQuery} setQuery={setCharactersQuery} setPage={setCharactersPage}/>
      {characters.length === 0 || <>{charactersPage === 1 || <button onClick={() => {previousPage()}}>Previous page</button>}
      <button onClick={() => {nextPage()}}>Next page</button></>}
      {characters.length > 0 || <p>No results</p>}
      {characters.map((character) => {
        return (
          <CharacterCard key={character.id} character={character} />
        )
      })}
    </section>
  );
}
