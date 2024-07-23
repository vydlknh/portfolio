function Contact() {

  return (
    <section id="contact">
      <div className="columns is-mobile">
        <div className="column"></div>
        <div className="column pt-6">
          <div className="level is-mobile">
              <div className="level-item">
                <a className="button" href="https://www.linkedin.com/in/vydlknh/">
                  <span className="icon">
                    <i class="fa-brands fa-linkedin"></i>
                  </span>
                  <span>LinkedIn</span>
                </a>
              </div>
              <div className="level-item">
                <a className="button" href="https://github.com/vydlknh">  
                  <span class="icon">
                    <i class="fab fa-github"></i>
                  </span>
                  <span>GitHub</span>
                </a>
              </div>
              <div className="level-item">
                <a className="button" href="https://drive.google.com/file/d/1BX7vgQq2zXR1X74hrsAw8PxFsSuss9K_/view?usp=sharing">
                  <span className="icon">
                    <i class="fa-solid fa-file"></i>
                  </span>
                  <span>Resume</span>
                </a>
              </div>
          </div>
        </div>
        <div className="column"></div>
      </div>
    </section>
  )
  
}

export default Contact