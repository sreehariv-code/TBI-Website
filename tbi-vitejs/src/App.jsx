import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import HomePage from "./pages/HomePage/HomePage";
import "./App.css";
import EventPage from "./pages/EventPage/EventPage";
import AboutPage from "./pages/AboutPage/AboutPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/events" element={<EventPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
