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
import Account from "./pages/Account/Account";
import Dashbord from "./pages/dashboard/Dashboard";
import AdminCourses from "./admin/Courses/AdminCourses";
import EventDescription from "./pages/eventdescription/EventDescription";
import AdminDashbord from "./admin/Dashboard/AdminDashboard";
import Loading from "./components/Loading/Loading";

function App() {
  const { isAuth, user, loading } = UserData();
  return (
    <div>
      <BrowserRouter>
        <div className="h-[100%] w-[100%] bg-gradient-to-r from-[#1D2671] via-[#000] to-[#1D2671]">
          <Appbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/store" element={<Merchandise />} />
            <Route
              path="/account"
              element={isAuth ? <Account user={user} /> : <Login />}
            />
            <Route path="/login" element={isAuth ? <Home /> : <Login />} />
            <Route
              path="/register"
              element={isAuth ? <Home /> : <Register />}
            />
            <Route path="/verify" element={isAuth ? <Home /> : <Verify />} />
            <Route
              path="/:id/dashboard"
              element={isAuth ? <Dashbord user={user} /> : <Login />}
            />
            <Route
              path="/admin/course"
              element={isAuth ? <AdminCourses user={user} /> : <Login />}
            />
            <Route
              path="/admin/dashboard"
              element={isAuth ? <AdminDashbord user={user} /> : <Login />}
            />
            <Route
              path="/event/registered/:id"
              element={isAuth ? <EventDescription user={user} /> : <Login />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
