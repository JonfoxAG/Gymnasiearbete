import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Navbar from './components/Navbarcomponent'; // Import the Navbar component
import { Pages } from '@mui/icons-material';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/contact" element={<Page3 />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
