import './App.css'
import NavBar from './components/NavBar'
import Contact from './components/Contact'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {

  return (
    <>
      <NavBar />
      <section className="section is-large">
        <div className="container has-text-centered">
          <h1 className="title mb-4" style={{fontSize: "5rem"}}>Hello! I am</h1>
          <h2 className="title has-text-primary" style={{fontSize: "5rem"}}>Vy Do</h2>
        </div>
        <Contact />
      </section>
      <About />
      <Projects />
      <Skills />
    </>
  )
}

export default App
