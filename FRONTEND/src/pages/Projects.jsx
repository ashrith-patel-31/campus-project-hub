import { Link } from "react-router-dom";
import axios from "axios";

function Projects({ projects, setProjects }) {
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await axios.delete(
        `http://localhost:8080/api/projects/${id}`
      );

      const updatedProjects = projects.filter(
        (project) => project.id !== id
      );

      setProjects(updatedProjects);

      alert("Project deleted successfully!");
    } catch (error) {
      console.error("Error deleting project:", error);
      alert("Failed to delete project.");
    }
  };

  return (
    <div>
      <h1>Campus Projects</h1>

      <p>
        Browse projects and find suitable teammates.
      </p>

      <Link to="/create-project">
        <button>Create Project</button>
      </Link>

      <hr />

      <div className="project-grid">
        {projects.length === 0 ? (
          <p>No projects available.</p>
        ) : (
          projects.map((project) => (
            <div
              className="project-card"
              key={project.id}
            >
              <h2>{project.title}</h2>

              <p>
                {project.description}
              </p>

              <p>
                <strong>Project Owner:</strong>{" "}
                {project.ownerName || "Not available"}
              </p>

              <p>
                <strong>Category:</strong>{" "}
                {project.category}
              </p>

              <p>
                <strong>Team Size:</strong>{" "}
                {project.teamSize}
              </p>

              <p>
                <strong>Required Skills:</strong>{" "}
                {project.skills}
              </p>

              <div className="project-buttons">
                <Link to={`/project/${project.id}`}>
                  <button>View Project</button>
                </Link>

                <Link to={`/edit-project/${project.id}`}>
                  <button>Edit</button>
                </Link>

                <button
                  onClick={() =>
                    handleDelete(project.id)
                  }
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Projects;