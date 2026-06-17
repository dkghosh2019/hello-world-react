import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Header'; // Import the new component
import Footer from './Footer'; // Import the new component
import Body from './Body';
import About from './About';

function App() {
  return (
    <Router>
    <div className="app-container"> 
      <Header title="My Custom Dashboard" /> {/* Use the component like an HTML tag */}
      {/* Navigation bar containing live transition links */}
        <nav style={{ margin: '20px 0', display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>Home</Link>
          <Link to="/about" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>About</Link>
        </nav>
        {/* The router decides whether to show Body or About depending on the URL */}
        {/* Dynamic page content layout wrapper */}
        <div className="content-area"></div>
        <Routes>
          <Route path="/" element={<Body content="Welcome to React Tutorials!" />} />
          <Route path="/about" element={<About />} />
        </Routes>

      <Footer year="2024" company="My React Learning Journey" /> {/* Use the component like an HTML tag */}
    </div>
    </Router>
  );
}

export default App;
