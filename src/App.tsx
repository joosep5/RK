import React from "react";
import Header from "./components/Header";
import MyContainer from "./layout/MyContainer";
import MyForm from "./components/Login";
import Home from "./components/Home";
import About from "./components/About";
import SignUpForm from "./components/SignUpForm";
import Game from "./components/Game";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <MyContainer>
      <Header />
      <Routes>
        {/* Teised marsruudid */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/SignUpForm" element={<SignUpForm />} />
        <Route path="/login" element={<MyForm />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </MyContainer>
  );
}

export default App;


//all olevas koodis kuvatakse AppBar alla lingid mida hetkel soovisin alles hoida

// // App.tsx
// import React from "react";
// import Header from "./components/Header";
// import MyContainer from "./layout/MyContainer";
// import MyForm from "./components/Login"; // Import Login komponent
// import Home from "./components/Home";
// import About from "./components/About";
// import SignUpForm from "./components/SignUpForm";
// import Game from "./components/Game"; // Import Game komponent


// import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";

// function App() {
//   return (
//     <MyContainer>
//       <Header />
//       {/* Menüü linkidega */}
//       <nav>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/SignUpForm">SignUpForm</Link></li>
//           <li><Link to="/login">Login</Link></li>
//           <li><Link to="/game">Play Tic-Tac-Toe</Link></li> {/* Lisa link mängule */}


//         </ul>
//       </nav>

//       <Routes>
//         {/* Teised marsruudid */}
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/SignUpForm"element={<SignUpForm />} />
//         <Route path="/login" element={<MyForm />} />
//         <Route path="/game" element={<Game />} /> {/* Lisa marsruut mängule */}


//       </Routes>
//     </MyContainer>
//   );
// }

// export default App;
