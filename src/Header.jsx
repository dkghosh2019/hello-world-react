import React from 'react';
import './Header.css'; // Import the CSS file for styling

function Header(props) {
  return (
    <header className="main-header" >
      <h2>{props.title}</h2>
    </header>
  );
}

export default Header;
