import React from "react";
import { MdDashboard } from "react-icons/md";
import "./account.css";
import { IoMdLogOut } from "react-icons/io";
import { UserData } from "../../context/UserContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Account = ({ user }) => {
  const { setIsAuth, setUser } = UserData();

  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.clear();
    setUser([]);
    setIsAuth(false);
    toast.success("Logged Out");
    navigate("/login");
  };
  return (
    <div className="h-screen">
      {user && (
        <div className="profile">
          <h2 className="profile-text">My Profile</h2>
          <div className="profile-info">
            <p>
              <strong>Name - {user.name}</strong>
            </p>

            <p>
              <strong>Email - {user.email}</strong>
            </p>
            <div className="button pad">
              <button
                onClick={() => navigate(`/${user._id}/dashboard`)}
                className="common-btn"
              >
                <span>Dashboard</span>
              </button>
            </div>

            <br />

            {user.role === "admin" && (
              <div className="button">
                <button
                  onClick={() => navigate(`/admin/dashboard`)}
                  className="common-btn"
                >
                  <span>Admin Dashboard</span>
                </button>
              </div>
            )}

            <br />
            <div className="button pad1">
              <button
                onClick={logoutHandler}
                className="common-btn"
                style={{ background: "red" }}
              >
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
