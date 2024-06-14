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
          <h1 className="title" style={{fontSize: "5rem"}}>Vy Do</h1>
        </div>
        <Contact />
      </section>
      <About />
      <Skills />
      <Projects />
    </>
  )
}

export default App
