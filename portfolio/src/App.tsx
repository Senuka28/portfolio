import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <header className="navbar">
      <nav>
        <a href="#home">Home</a>{" | "}
        <a href="#experience">Experience</a>{" | "}
        <a href="#projects">Projects</a>{" | "}
        <a href="#skills">Skills</a>{" | "}
        <a href="#contact">Contact</a>{" | "}
      </nav>
    </header>

    <main>
        <div className='container'>
          <section id="home">
            <h1>Hi, I'm Senuka</h1>
            <p>This is the home section.</p>
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
