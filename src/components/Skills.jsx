import Skill from "../components/Skill"

function Skills() {

  return (
    <section id="skills" className="container py-5">
      <h2 className="title has-text-primary">Skills</h2>
      <div className="columns">
        <div className="column">
          <h3 className="is-size-4 has-text-centered has-text-weight-bold has-text-primary-30 py-2">Programming languages</h3>
          <div className="columns has-text-centered is-mobile">
            <div className="column">
              <Skill name="Python" img="https://i.imgur.com/Qoa7EvS.png" alt="Vy Do Python"/>
              <Skill name="Java" img="https://i.imgur.com/owDUiW3.png" alt="Vy Do Java"/>
            </div>
            <div className="column">
              <Skill name="MySQL" img="https://i.imgur.com/fLwxLkV.png" alt="Vy Do MySQL"/>
              <Skill name="C++" img="https://i.imgur.com/4xvu2go.png" alt="Vy Do C++"/>
            </div>
            <div className="column">
              <Skill name="Javascript" img="https://i.imgur.com/TjtHht8.png" alt="Vy Do JavaScript"/>
              <Skill name="Matlab" img="https://i.imgur.com/7GzzS3T.png" alt="Vy Do Matlab"/>
            </div>
          </div>
        </div>
        <div className="column">
          <h3 className="is-size-4 has-text-centered has-text-weight-bold has-text-primary-30 py-2">Tools</h3>
          <div className="columns has-text-centered is-mobile">
            <div className="column">
              <Skill name="Tableau" img="https://i.imgur.com/5vAVbsR.png" alt="Vy Do Tableau"/>
              <Skill name="Git" img="https://i.imgur.com/fsh6mSr.png" alt="Vy Do Git"/>
            </div>
            <div className="column">
              <Skill name="Jupyter" img="https://i.imgur.com/O8dCb1q.png" alt="Vy Do Jupyter"/>
              <Skill name="VSCode" img="https://i.imgur.com/S5s6XWy.png" alt="Vy Do VSCode"/>
            </div>
            <div className="column">
              <Skill name="Excel" img="https://i.imgur.com/OZwEbKP.png" />
            </div>
          </div>
        </div>
        <div className="column">
          <h3 className="is-size-4 has-text-centered has-text-weight-bold has-text-primary-30 py-2">Frameworks & libraries</h3>
          <div className="columns has-text-centered is-mobile">
            <div className="column">
              <Skill name="PyTorch" img="https://i.imgur.com/bVE2ErA.png" alt="Vy Do PyTorch"/>
              <Skill name="NumPy" img="https://i.imgur.com/gNzHU6R.png" alt="Vy Do NumPy"/>
              <Skill name="Seaborn" img="https://i.imgur.com/qE3DQbd.png" alt="Vy Do Seaborn"/>
            </div>
            <div className="column">
              <Skill name="LlamaIndex" img="https://i.imgur.com/D59sZ8t.jpeg" alt="Vy Do LlamaIndex"/>
              <Skill name="Scikit-learn" img="https://i.imgur.com/anCqpD5.png" alt="Vy Do Scikit-learn"/>
              <Skill name="React" img="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="Vy Do React"/>
            </div>
            <div className="column">
              <Skill name="Pandas" img="https://i.imgur.com/0td6JvC.png" alt="Vy Do Pandas"/>
              <Skill name="Matplotlib" img="https://i.imgur.com/1qQQrG1.png" alt="Vy Do Matplotlib"/>
              <Skill name="Spring" img="https://i.imgur.com/YBm7tAN.png" alt="Vy Do Spring"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
