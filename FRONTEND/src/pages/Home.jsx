import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-tag">🎓 CAMPUS PROJECT HUB</p>

          <h1>
            Find Skills.
            <br />
            Build Projects.
            <br />
            <span>Find Teammates.</span>
          </h1>

          <p className="hero-description">
            A campus platform where students can showcase their skills,
            discover exciting projects, and collaborate with the right
            teammates.
          </p>

          <div className="hero-buttons">
            <Link to="/projects">
              <button className="primary-button">
                Explore Projects →
              </button>
            </Link>

            <Link to="/register">
              <button className="secondary-button">
                Join Campus Hub
              </button>
            </Link>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-icon">🚀</div>

          <h2>Build Together</h2>

          <p>
            Turn your ideas into real projects by connecting
            with students who have the skills you need.
          </p>

          <div className="mini-stats">
            <div>
              <strong>Projects</strong>
              <span>Collaborate</span>
            </div>

            <div>
              <strong>Skills</strong>
              <span>Showcase</span>
            </div>

            <div>
              <strong>Teams</strong>
              <span>Connect</span>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2>What You Can Do</h2>

        <p className="section-description">
          Everything you need to start collaborating with
          students on campus.
        </p>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">💡</div>
            <h3>Create Projects</h3>
            <p>
              Share your project ideas and find students who
              are interested in working with you.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Discover Projects</h3>
            <p>
              Browse campus projects and find opportunities
              that match your interests and skills.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🤝</div>
            <h3>Find Teammates</h3>
            <p>
              Send join requests and build teams with students
              who have complementary skills.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;