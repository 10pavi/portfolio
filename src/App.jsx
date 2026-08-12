import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://https://portfolio-xoar.onrender.com/api/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div className="portfolio">

      {/* Navigation */}
      <nav className="navbar">
        <h2>Pavithra K</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Home */}
      <section id="home" className="hero">
        <p className="intro">Hello, I'm</p>

        <h1>Pavithra K</h1>

        <h2>
          Computer Science Engineering Student | Aspiring Data Analyst & Software Developer
        </h2>

        <p>
          I am a Computer Science Engineering student passionate about data
          analysis, software development, problem solving, and technology. I
          enjoy building practical applications, working with data, and
          continuously developing my technical skills.
        </p>

        <a href="#projects" className="button">
          View My Projects
        </a>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2>About Me</h2>

        <p>
          I am a Computer Science Engineering student interested in Data
          Analytics and Software Development. I enjoy analyzing data,
          developing practical applications, solving problems, and learning
          new technologies. I am continuously improving my technical and
          analytical skills through projects, certifications, and hands-on
          experience.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2>Skills</h2>

        <div className="skills-container">
          <span>Python</span>
          <span>Java</span>
          <span>C</span>
          <span>SQL</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>Excel</span>
          <span>Tableau</span>
          <span>Power BI</span>
          <span>Git & GitHub</span>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="projects-container">

          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <h3>{project.name}</h3>

              {project.name === "Huffman File Compression Tool" ? (
                <>
                  <p>
                    A file compression tool developed using the Huffman coding
                    algorithm to reduce file size while preserving data
                    integrity. The project supports file compression and
                    decompression.
                  </p>

                  <p>
                    <strong>Technologies:</strong> {project.technology}
                  </p>

                  <a
                    href="https://github.com/10pavi/Compression_Tool"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View on GitHub
                  </a>
                </>
              ) : (
                <>
                  <p>
                    Completed four data analytics projects covering data
                    cleaning, exploratory data analysis, SQL data analysis,
                    and data visualization using Python.
                  </p>

                  <p>
                    <strong>Tasks:</strong>
                  </p>

                  <ul className="task-list">
                    <li>Task 1 — Data Cleaning</li>
                    <li>Task 2 — Exploratory Data Analysis (EDA)</li>
                    <li>Task 3 — SQL Data Analysis</li>
                    <li>Task 4 — Data Visualization using Python</li>
                  </ul>

                  <p>
                    <strong>Tools:</strong> {project.technology}
                  </p>

                  <div className="project-buttons">
                    <a
                      href="https://github.com/10pavi/Task-1-Pavithra-K"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Task 1
                    </a>

                    <a
                      href="https://github.com/10pavi/Task-2-Pavithra-K"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Task 2
                    </a>

                    <a
                      href="https://github.com/10pavi/Task-3-Pavithra-K"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Task 3
                    </a>

                    <a
                      href="https://github.com/10pavi/Task-4-Pavithra-K"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Task 4
                    </a>
                  </div>
                </>
              )}

            </div>
          ))}

        </div>
      </section>

      {/* Education */}
      <section id="education" className="section">
        <h2>Education</h2>

        <div className="education-card">
          <h3>B.E. Computer Science and Engineering</h3>
          <p>Jyothy Institute of Technology</p>
          <p>2024 - 2028 | Currently pursuing</p>
          <p>CGPA: 9.2</p>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="section">
        <h2>Certifications</h2>

        <div className="certifications">

          <div className="certification-card">
            <h3>Scientific Computing with Python</h3>
            <p>freeCodeCamp</p>
            <p>Completed</p>
          </div>

          <div className="certification-card">
            <h3>Deloitte Data Analytics Job Simulation</h3>
            <p>Forage</p>
            <p>Completed</p>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact">
        <h2>Contact</h2>

        <p>I'm always interested in learning and connecting.</p>

        <p>
          Email:{" "}
          <a href="mailto:pavithrakannan73@gmail.com">
          pavithrakannan73@gmail.com
          </a>
        </p>

        <div className="contact-links">

          <a
            href="https://github.com/10pavi"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/pavithrakannan10"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Pavithra K. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;