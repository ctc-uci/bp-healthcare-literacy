import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/pages/Home';
import Options from './components/pages/Options';
import SignUp from './components/pages/SignUp';
import UCSHIP from './components/pages/UCSHIP';

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Options" element={<Options />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/UCSHIP" element={<UCSHIP />} />
    </Routes>
  </Router>,
  document.getElementById('root'),
);
