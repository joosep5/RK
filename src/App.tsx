// App.tsx
import React from "react";
import Header from "./components/Header";
import MyContainer from "./layout/MyContainer";
import MyForm from "./components/Login"; // Import Login komponent
// Lisa teised komponendid, nagu Home ja About
import Home from "./components/Home";
import About from "./components/About";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <MyContainer>
        <Header />
        
        {/* Menüü linkidega */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>

        {/* Defineeri marsruudid */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home komponent avatakse, kui kasutaja on / lehel */}
          <Route path="/login" element={<MyForm />} /> {/* Login komponent avatakse, kui kasutaja on /login lehel */}
          <Route path="/about" element={<About />} /> {/* About komponent avatakse, kui kasutaja on /about lehel */}
        </Routes>
      </MyContainer>
    </Router>
  );
}

export default App;
