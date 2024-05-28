import './App.css'
import NavBar from './components/NavBar'
import Contact from './components/Contact'
import About from './components/About'

function App() {

  return (
    <>
      <NavBar />
      <div className="header">
        <h2 className="subtitle">Hello! My name is</h2>
        <h1 className="title">Vy Do</h1>
      </div>
      <Contact />
      <div className="about">
        <h1>About Me</h1>
        <About />
      </div>
    </>
  )
}

export default App
