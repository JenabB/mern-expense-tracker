import React from 'react';
import Navigation from './Navigation';
import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider className="">
      <Navigation />
    </GlobalProvider>
  );
}

export default App;
