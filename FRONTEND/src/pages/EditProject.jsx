import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditProject({ projects, setProjects }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const existingProject = projects.find(
    (project) => project.id === Number(id)
  );

  const [project, setProject] = useState(existingProject);

  if (!project) {
    return <h2>Project not found</h2>;
  }

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:8080/api/projects/${id}`,
        {
          title: project.title,
          description: project.description,
          category: project.category,
          teamSize: Number(project.teamSize),
          skills: project.skills,
        }
      );

      const updatedProjects = projects.map((item) =>
        item.id === Number(id) ? response.data : item
      );

      setProjects(updatedProjects);

      alert("Project updated successfully!");

      navigate("/projects");
    } catch (error) {
      console.error("Error updating project:", error);
      alert("Failed to update project.");
    }
  };

  return (
    <div>
      <h1>Edit Project</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Project Title"
          value={project.title}
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <textarea
          name="description"
          placeholder="Project Description"
          value={project.description}
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <input
          type="text"
          name="category"
          placeholder="Project Category"
          value={project.category}
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <input
          type="number"
          name="teamSize"
          placeholder="Team Size"
          value={project.teamSize}
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <input
          type="text"
          name="skills"
          placeholder="Required Skills"
          value={project.skills}
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <button type="submit">
          Update Project
        </button>
      </form>
    </div>
  );
}

export default EditProject;