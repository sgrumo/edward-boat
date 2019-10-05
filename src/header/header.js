import React from 'react';
import './Header.css';
import logo from '../assets/22.png';

const Header = () => {
  return (
    <header className="header">
      <h2>Filippo Medici</h2>
      <img className="img" src={logo} alt="logo" description="logo" />
      <h2>Sound Designer</h2>
    </header>
  );
};

export default Header;
