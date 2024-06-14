function NavBar() {

  return (
    <>
      <nav class="navbar m-2" role="navigation" aria-label="main navigation">
        <div className="navbar-brand ml-1">
          <a class="navbar-burger" role="button" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbar" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" href="#about">
              Home
            </a>
            <a class="navbar-item" href="#about">
              About Me
            </a>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                Projects
              </a>
              <div class="navbar-dropdown">
                <a class="navbar-item">
                  Weather prediction
                </a>
                <a class="navbar-item">
                  Football match prediction
                </a>
                <a class="navbar-item">
                  FarmFinder
                </a>
              </div>
            </div>
            <a class="navbar-item">
              Skills
            </a>
            <a class="navbar-item">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
