import Analysis from './pages/Analysis';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    
    <Router>
      <Routes>
      <Route path="/" element={<Analysis />} />
        <Route path="/analysis" element={<Analysis />} />
      </Routes>
    </Router>
  );
}

export default App;