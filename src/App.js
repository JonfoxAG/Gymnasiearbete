import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

function App() {
    return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/public/page2.html" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    );
  }
  
  const Home = () => <h2>Home Page</h2>;
  const About = () => <h2>Page 2</h2>;
  const Contact = () => <h2>Contact Page</h2>;
  
  export default App;