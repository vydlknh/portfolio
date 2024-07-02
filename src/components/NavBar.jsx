function NavBar() {

  return (
    <>
      <nav className="navbar m-2" role="navigation" aria-label="main navigation">
        <div className="navbar-brand ml-1">
          <a className="navbar-burger" role="button" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbar" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="/">
              Home
            </a>
            <a className="navbar-item" href="#about">
              About Me
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" href="#projects">
                Projects
              </a>
              <div className="navbar-dropdown">
                <a className="navbar-item">
                  Weather prediction
                </a>
                <a className="navbar-item">
                  Football match prediction
                </a>
                <a className="navbar-item">
                  FarmFinder
                </a>
              </div>
            </div>
            <a className="navbar-item" href="#skills">
              Skills
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
