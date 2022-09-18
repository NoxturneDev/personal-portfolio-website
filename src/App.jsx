import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import './style/style.css';
import Main from './pages/landing-page/Main'

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
