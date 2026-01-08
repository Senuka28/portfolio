import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <header className="navbar">
      <div className="nav-inner">
        <div className="nav-brand gradient-text">
          Senuka Abeysinghe
        </div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <span>|</span>
          <a href="#experience">Experience</a>
          <span>|</span>
          <a href="#projects">Projects</a>
          <span>|</span>
          <a href="#skills">Skills</a>
          <span>|</span>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>

    <main>
        <div className='container'>
          <section id="home" className='hero'>
            <div className="hero-content">
              <img
                src="/me.jpg"
                alt="Senuka Abeysinghe"
                className="hero-image"
              />

              <div className="hero-text">
                <h1 className="gradient-text">Hi, I'm Senuka!</h1>
                <p>Hello! I am an undergraduate student at Johns Hopkins University studying Computer Science and Applied Mathematics & Statistics. I am experienced and interested in applying software and AI/ML to bring automation solutions to industry. </p>

                <div className="hero-actions">
                  <div className="social-icons">
                    <a href="https://github.com/Senuka28" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    
                    <a href="https://linkedin.com/in/senukaabeysinghe" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    
                    <a href="mailto:sabeysi2@jh.edu" className="social-icon" aria-label="Email">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </a>
                  </div>
                  
                  <a href="/path-to-your-resume.pdf" download className="resume-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Download Resume
                  </a>
                </div>
                
                
              
              </div>
            </div>
          </section>

          <section id="experience">
            <h2 className="gradient-text">Experience</h2>
            <div className="experience-card">
              <div className="experience-header">
                <h3>Software Engineer Intern</h3>
                <p className="company">Crown</p>
              </div>
              <div className="experience-date">May 2025 — Aug 2025</div>
              <div className="experience-content">
                <ul>
                  <li>Implemented an intelligent multithreading architecture for vehicle communication software in C++ using the Boost
                      library, parallelizing message handling, sensor data processing, and logging to improve throughput by over 40%</li>
                  <li>Designed an automated unit testing framework for Structured Text, leveraging Python scripts to generate and
                      execute 490+ test files for embedded code, fully integrated into CI/CD pipeline to reduce manual QA effort</li>
                  <li>Engineered a time synchronization protocol over the CANBUS for vehicle networks using C++, Lua scripts for sync
                      logic, and Python for telemetry validation to achieve sub-microsecond clock alignment across device nodes</li>
                </ul>
              </div>
            </div>

            <div className="experience-card">
              <div className="experience-header">
                <h3>Research Software Engineer</h3>
                <p className="company">SMARTS Lab — Johns Hopkins University</p>
              </div>
              <div className="experience-date">Jan 2025 — Oct 2025</div>
              <div className="experience-content">
                <ul>
                  <li>Architected a deep learning differentiable rendering pipeline in Python with PyTorch3D and OpenCV, refining a
                      surgical tool’s 6-DoF pose using silhouette and keypoint alignment to reduce manual annotation</li>
                  <li>Automated GPU-accelerated stereo data preprocessing in Colab, documenting and reporting experiments while
                      handling calibration parsing, image processing/undistortion, and batching 68,000 frames for simulation purposes</li>
                  <li>Validated deep learning driven pose estimation at 25 FPS on live endoscopic video, achieving over 83% alignment
                      accuracy for real-time surgical guidance</li>
                </ul>
              </div>
            </div>

            <div className="experience-card">
              <div className="experience-header">
                <h3>Research Software Engineer</h3>
                <p className="company">AMLI Lab — University of Cincinnati</p>
              </div>
              <div className="experience-date">May 2021 — June 2024</div>
              <div className="experience-content">
                <ul>
                  <li>Developed MATLAB pipelines to convert genomic sequences into 2D images and trained classifiers (k-NN, Naive
                      Bayes, k-means) to distinguish plant virus types with up to 92% classification accuracy</li>
                  <li>Applied machine learning and deep learning models on clinical and histopathological data to predict breast cancer
                      types, achieving up to 97.2% accuracy using Random Forest with PCA-based feature selection</li>
                  <li>2x published in the Advances in Artificial Intelligence and Machine Learning Journal</li>
                </ul>
              </div>
            </div>

          <div className="experience-card">
              <div className="experience-header">
                <h3>Data Engineer Intern</h3>
                <p className="company">Clairity</p>
              </div>
              <div className="experience-date">May 2024 — Aug 2024</div>
              <div className="experience-content">
                <ul>
                  <li>Supported Clairity’s AI-driven breast cancer risk prediction initiative using R to assist with data preparation and
                      analysis on mammography datasets across 5,000+ patient records</li>
                  <li>Led outreach coordination with imaging personnel at 60+ U.S. healthcare facilities to assist in integrating
                      mammography units, RIS, and PACS systems</li>
                </ul>
              </div>
            </div>

          <div className="experience-card">
              <div className="experience-header">
                <h3>Computational Physics Research Intern</h3>
                <p className="company">Department of Physics — University of Cincinnati</p>
              </div>
              <div className="experience-date">June 2023 — May 2024</div>
              <div className="experience-content">
                <ul>
                  <li>Built analytical and computational models to study the stability of ultra-light bosonic systems under external masses
                  using variational methods, closed-form analysis, and numerical optimization</li>
                  <li>Developed MATLAB and Python simulations to compute and model energy landscapes, wavefunctions, and stability
                  regimes, generating 5 distinct analytical figures comparing stability behavior across models and physical scenarios</li>
                  <li>Manuscript accepted for publication in the Journal of Emerging Investigators</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="projects">
            <h2 className="gradient-text">Projects</h2>
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-header">
                  <h3>Nonprofit Ops Dashboard</h3>
                  <ul className="project-languages">
                    <li>NodeJS</li>
                    <li>ReactJS</li>
                    <li>ExpressJS</li>
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                    <li>SQL</li>
                  </ul>
                </div>
                <div className="project-content">
                  <ul>
                    <li>Created a full-stack web app using React, NodeJS, ExpressJS, and MySQL to manage grant funding, volunteer records, 
                        and staff timesheets for nonprofit organizations</li>
                    <li>Implemented timesheet tracking and dynamic data views, reducing manual entry by over 60% and streamlining data
                        flow across database, front-end, and back-end layers</li>
                  </ul>
                </div>
              </div>

              <div className="project-card">
                <div className="project-header">
                  <h3>CourseVote</h3>
                  <ul className="project-languages">
                    <li>Python</li>
                    <li>TypeScript</li>
                    <li>Flask</li>
                    <li>Supabase</li>
                    <li>PostreSQL</li>
                    <li>OpenAI API</li>
                  </ul>
                </div>
                <div className="project-content">
                  <ul>
                    <li>Built a data pipeline using Python, SQL, and REST APIs to extract, clean, and structure over 2,600+ course
                        evaluation records, including comments, ratings, and difficulty metrics</li>
                    <li>Automated course summary generation using OpenAI API, outputs written to database for frontend integration</li>
                  </ul>
                </div>
              </div>

              <div className="project-card">
                <div className="project-header">
                  <h3>Automated PLC Test Library Generator</h3>
                  <ul className="project-languages">
                    <li>Python</li>
                    <li>JSON</li>
                    <li>Unit Testing</li>
                  </ul>
                </div>
                <div className="project-content">
                  <ul>
                    <li>Built a Python automation tool that generates a vendor-agnostic IEC 61131-3 Structured Text unit-testing library
                        for PLC projects</li>
                    <li>Delivered a suite of 490 reusable assertion POUs (typed + array assertions) with standardized pass/fail reporting,
                        reducing duplicated test logic and improving regression reliability</li>
                  </ul>
                </div>
              </div>

              <div className="project-card">
                <div className="project-header">
                  <h3>Baltimore Street Searcher</h3>
                  <ul className="project-languages">
                    <li>Java</li>
                    <li>Docker</li>
                    <li>Data Structures</li>
                  </ul>
                </div>
                <div className="project-content">
                  <ul>
                    <li>Implemented Dijkstra’s algorithm over a Baltimore street network with 27,598 roads and 9,024 endpoints, 
                        achieving 9–19 ms shortest-path query times and ~60–80 ms graph load times</li>
                    <li>Exposed pathfinding through a web-based interface for interactive route queries, maintaining stable 
                        memory usage (~15 MB peak) and consistent performance across short and city-spanning routes</li>
                  </ul>
                </div>
              </div>
            </div>

            
          </section>

              <section id="skills">
                <h2 className="gradient-text">Skills</h2>
                <div className="skills-grid">
                  <div className="skill-category">
                    <h3>Languages</h3>
                    <div className="skill-tags">
                      <span className="skill-tag">Python</span>
                      <span className="skill-tag">C/C++</span>
                      <span className="skill-tag">SQL</span>
                      <span className="skill-tag">JavaScript</span>
                      <span className="skill-tag">TypeScript</span>
                      <span className="skill-tag">Bash</span>
                      <span className="skill-tag">Java</span>
                      <span className="skill-tag">HTML/CSS</span>
                      <span className="skill-tag">MATLAB</span>
                      <span className="skill-tag">R</span>
                    </div>
                  </div>

                  <div className="skill-category">
                    <h3>Technologies</h3>
                    <div className="skill-tags">
                      <span className="skill-tag">Git</span>
                      <span className="skill-tag">GitHub Actions</span>
                      <span className="skill-tag">Flask</span>
                      <span className="skill-tag">Linux/Unix</span>
                      <span className="skill-tag">Docker</span>
                      <span className="skill-tag">VS Code</span>
                      <span className="skill-tag">Postman</span>
                      <span className="skill-tag">React</span>
                      <span className="skill-tag">Node.js/Express</span>
                      <span className="skill-tag">PyTorch</span>
                      <span className="skill-tag">TensorFlow</span>
                      <span className="skill-tag">OpenCV</span>
                    </div>
                  </div>

                  <div className="skill-category">
                    <h3>Concepts</h3>
                    <div className="skill-tags">
                      <span className="skill-tag">REST APIs</span>
                      <span className="skill-tag">SDLC</span>
                      <span className="skill-tag">OOP</span>
                      <span className="skill-tag">Full-Stack</span>
                      <span className="skill-tag">Unit Testing</span>
                      <span className="skill-tag">CI/CD</span>
                      <span className="skill-tag">Debugging</span>
                      <span className="skill-tag">Agile</span>
                      <span className="skill-tag">Machine Learning</span>
                      <span className="skill-tag">Deep Learning</span>
                    </div>
                  </div>
                </div>
              </section>

              <section id="contact">
                <h2 className="gradient-text">Contact</h2>
                <p>This is the contact section.</p>
              </section>
            </div>
          </main>
  </div>
  );
}

export default App
