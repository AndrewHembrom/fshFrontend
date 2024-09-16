import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Appbar from "./components/Appbar";
import Home from "./pages/Home/Home";
import Events from "./pages/Events/Events";
import Merchandise from "./pages/Merchandise/Merchandise";
import { UserData } from "./context/UserContext";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Verify from "./pages/auth/Verify";

function App() {
  const { isAuth } = UserData();
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/store" element={<Merchandise />} />
          <Route path="/login" element={isAuth ? <Home /> : <Login />} />
          <Route path="/register" element={isAuth ? <Home /> : <Register />} />
          <Route path="/verify" element={isAuth ? <Home /> : <Verify />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
