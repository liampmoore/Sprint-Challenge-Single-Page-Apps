import React from "react";
import {Route} from 'react-router-dom';

import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import CharacterList from "./components/CharacterList.js";


export default function App() {
  return (
    <main>
      <Header />
      
      <Route>
        <WelcomePage exact path='/' />
      </Route>
      <Route path='/characters'>
      <CharacterList/>
      </Route>
    </main>
  );
}
