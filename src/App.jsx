import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/home';
import { Page1 } from './Pages/page1';
import { Page2 } from './Pages/page2';
import { Page3 } from './Pages/page3';

import Header from './Header';

import { useState } from 'react'; // Add useState import if needed

import './App.css';

function App()  {
  // State and other logic can be added here if needed

  return (
    
    <Router>
      <Header /> {/* Add this line */}
      <Routes>
        <Route path="/"       element={<Home />} />
        <Route path='/page1'  element={<Page1 />} />
        <Route path='/page2'  element={<Page2 />} />
        <Route path='/page3'  element={<Page3 />} />
      </Routes>
    </Router>
  );
}

export default App;














/*<div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      */