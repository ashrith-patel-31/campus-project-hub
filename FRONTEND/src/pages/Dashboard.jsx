import { Link } from "react-router-dom";

function Dashboard() {
  const savedUser = localStorage.getItem("currentUser");
  const currentUser = savedUser ? JSON.parse(savedUser) : null;

  return (
    <div>
      <h1>Welcome to Campus Project Hub</h1>

      {currentUser && (
        <p>
          <strong>Welcome, {currentUser.name}!</strong>
        </p>
      )}

      <p>
        Find projects, showcase your skills, and collaborate with
        other students.
      </p>

      <hr />

      <h2>Quick Actions</h2>

      <div>
        <Link to="/projects">
          <button>Browse Projects</button>
        </Link>

        {" "}

        <Link to="/create-project">
          <button>Create Project</button>
        </Link>

        {" "}

        <Link to="/profile">
          <button>My Profile</button>
        </Link>

        {" "}

        <Link to="/my-requests">
          <button>My Requests</button>
        </Link>

        {" "}

        <Link to="/join-requests">
          <button>Join Requests</button>
        </Link>
      </div>

      <hr />

      <h2>Platform Features</h2>

      <ul>
        <li>Create and manage projects</li>
        <li>Find suitable teammates</li>
        <li>Send and manage join requests</li>
        <li>Track request status</li>
        <li>Showcase your skills</li>
      </ul>
    </div>
  );
}

export default Dashboard;