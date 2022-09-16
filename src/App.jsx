import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import './css/index.css';
import Main from './pages/Main'

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  </Router>
  );
}

export default App;
