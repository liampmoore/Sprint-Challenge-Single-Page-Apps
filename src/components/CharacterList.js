import React from "react";
import styled from 'styled-components';

import SearchForm from './SearchForm';
import CharacterCard from './CharacterCard';

const Button = styled.button`
  height: 1.5rem;
  display: inline-block;
  border-radius: 5px;
`;

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
      {characters.length === 0 || <>{charactersPage === 1 || <Button onClick={() => {previousPage()}}>Previous page</Button>}
      <Button onClick={() => {nextPage()}}>Next page</Button></>}
      {characters.length > 0 || <p>No results</p>}
      {characters.map((character) => {
        return (
          <CharacterCard key={character.id} character={character} />
        )
      })}
    </section>
  );
}
