// components/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      {/* Menüü lingid, mis on nähtavad ainult Home lehel */}
      <nav>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/SignUpForm">SignUpForm</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/game">Play Tic-Tac-Toe</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
