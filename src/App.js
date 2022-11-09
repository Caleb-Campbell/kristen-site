// Module Imports
import {Route, Routes} from 'react-router-dom'
import React from 'react';


//  Component Imports

import Home from './components/Home';


// CSS Imports
import './App.css';

function App() {
  return ( <div>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  </div>
  );
}

export default App;
