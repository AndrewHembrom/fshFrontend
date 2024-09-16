import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Appbar from "./components/Appbar";
import Home from "./pages/Home/Home";
import Events from "./pages/Events/Events";
import Merchandise from "./pages/Merchandise/Merchandise";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/store" element={<Merchandise />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
