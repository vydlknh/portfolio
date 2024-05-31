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
      <div className="header">
        <h2 className="subtitle">Hello! My name is</h2>
        <h1 className="title">Vy Do</h1>
        <Contact />
      </div>
      <About />
      <Skills />
      <Projects />
    </>
  )
}

export default App
