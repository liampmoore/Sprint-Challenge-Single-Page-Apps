import React from "react";

export default function SearchForm({query, setQuery}) {

  const handleChange = (event) => {
    setQuery(event.target.value)

  }

  return (
    <section className="search-form" >
        <input type='text' value={query} onChange={(event) => {handleChange(event)}}></input>
    </section>
  );
}
