// Module Imports
import {Route, Routes} from 'react-router-dom'
import React from 'react';


//  Component Imports

import Home from './components/Home';


// CSS Imports
import './App.css';

function App() {
  return ( <>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    <footer>
      <h2 className='footer-h'>Kristen's Creations</h2>
      <div className='footer-contents'>
      <div className='contact'>
      <a href = "mailto: abc@example.com">Email Kristen</a>
      </div>
      <div className='copyright'><p>Site by Caleb Campbell</p><p>© Copyright 2022. All Rights Reserved.</p> </div>
      </div>
    </footer>
  </>
  );
}

export default App;
