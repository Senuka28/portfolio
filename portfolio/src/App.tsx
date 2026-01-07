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
          <a href="#home"><p>Home</p></a>
          <span>|</span>
          <a href="#experience"><p>Experience</p></a>
          <span>|</span>
          <a href="#projects"><p>Projects</p></a>
          <span>|</span>
          <a href="#skills"><p>Skills</p></a>
          <span>|</span>
          <a href="#contact"><p>Contact</p></a>
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
                <h1 className="gradient-text">Hi! I'm Senuka</h1>
                <p>Hello! I am an undergraduate student at Johns Hopkins University studying Computer Science and Applied Mathematics & Statistics. I am experienced and interested in applying software and AI/ML to bring automation solutions to industry. </p>
              </div>
            </div>
          </section>

          <section id="experience">
            <h2>Experience</h2>
            <p>This is the experience section.</p>
          </section>

          <section id="projects">
            <h2>Projects</h2>
            <p>This is the projects section.</p>
          </section>

          <section id="skills">
            <h2>Skills</h2>
            <p>This is the skills section.</p>
          </section>

          <section id="contact">
            <h2>Contact</h2>
            <p>This is the contact section.</p>
          </section>
        </div>
      </main>
  </div>
  );
}

export default App
