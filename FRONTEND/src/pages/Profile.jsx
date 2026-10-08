import { useState } from "react";
import axios from "axios";

function Profile() {
  const savedUser = localStorage.getItem("currentUser");

  const currentUser = savedUser
    ? JSON.parse(savedUser)
    : null;

  const [profile, setProfile] = useState({
    name: currentUser?.name || "",
    email: currentUser?.email || "",
    branch: currentUser?.branch || "",
    year: currentUser?.year || "",
    skills: currentUser?.skills || "",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    if (!currentUser) {
      alert("Please login first.");
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:8080/api/users/${currentUser.id}`,
        {
          ...profile,
          year: Number(profile.year),
        }
      );

      // Update the logged-in user stored in the browser
      localStorage.setItem(
        "currentUser",
        JSON.stringify(response.data)
      );

      alert("Profile saved successfully!");
    } catch (error) {
      console.error("Profile update error:", error);
      alert("Failed to save profile.");
    }
  };

  return (
    <div>
      <h1>My Profile</h1>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={profile.name}
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={profile.email}
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        type="text"
        name="branch"
        placeholder="Branch"
        value={profile.branch}
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        type="number"
        name="year"
        placeholder="Year"
        value={profile.year}
        onChange={handleChange}
      />

      <br />
      <br />

      <h3>Technical Skills</h3>

      <input
        type="text"
        name="skills"
        placeholder="Example: Verilog, Java, React"
        value={profile.skills}
        onChange={handleChange}
      />

      <br />
      <br />

      <button onClick={handleSave}>
        Save Profile
      </button>
    </div>
  );
}

export default Profile;