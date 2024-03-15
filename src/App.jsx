import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DetailsM from './pages/DetailsM';
import DetailsS from './pages/DetailsS';


function App() {
  return (
    <Routes>
      <Route path="/streamm/" element={<Home />} />
      <Route path="/streamm/movie/:id" element={<DetailsM />} />
      <Route path="/streamm/show/:id" element={<DetailsS />} />
    </Routes>
  );
}

export default App;
