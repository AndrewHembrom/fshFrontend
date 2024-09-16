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
        <div className="h-[100%] w-[100%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <Appbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/store" element={<Merchandise />} />
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
