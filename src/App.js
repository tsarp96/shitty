import './App.css';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Home from "./Home";
import TestSection from "./TestSection";
import React from "react";

function App() {
  return (
      <Router>
          <header><h1>Shitty App</h1></header>
        <footer>

        </footer>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/test" element={<TestSection/>}/>
          </Routes>
      </Router>
  );
}

export default App;
