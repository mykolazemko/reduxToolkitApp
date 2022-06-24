import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router";
import Home from "./pages/home/Home";
import Characters from "./pages/characters/Characters";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route  path="characters" element={<Characters />} />
      </Routes>
    </div>
  );
}

export default App;
