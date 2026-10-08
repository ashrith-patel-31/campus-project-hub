import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const savedUser = localStorage.getItem("currentUser");

  const handleLogout = () => {
    localStorage.removeItem("currentUser");

    alert("Logged out successfully!");

    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2 className="navbar-title">
        🎓 Campus Project Hub
      </h2>

      <div className="navbar-links">
        <Link to="/">🏠 Home</Link>

        <Link to="/login">🔐 Login</Link>

        <Link to="/register">📝 Register</Link>

        <Link to="/dashboard">📊 Dashboard</Link>

        <Link to="/projects">📁 Projects</Link>

        <Link to="/profile">👤 My Profile</Link>

        <Link to="/my-requests">
          📨 My Requests
        </Link>

        <Link to="/join-requests">
          🤝 Join Requests
        </Link>

        {savedUser && (
          <button onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;