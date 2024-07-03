import Skill from "../components/Skill"

function Skills() {

  return (
    <div id="skills" className="container py-5">
      <h1 className="title has-text-primary">Skills</h1>
      <div className="columns">
        <div className="column">
          <h3 className="is-size-4 has-text-centered has-text-weight-bold has-text-primary-30 py-2">Programming languages</h3>
          <div className="columns has-text-centered">
            <div className="column">
              <Skill name="Python" img="https://i.imgur.com/Qoa7EvS.png" />
              <Skill name="Java" img="https://i.imgur.com/owDUiW3.png" />
            </div>
            <div className="column">
              <Skill name="MySQL" img="https://i.imgur.com/fLwxLkV.png" />
              <Skill name="C++" img="https://i.imgur.com/4xvu2go.png" />
            </div>
            <div className="column">
              <Skill name="Javascript" img="https://i.imgur.com/TjtHht8.png" />
              <Skill name="Matlab" img="https://i.imgur.com/7GzzS3T.png" />
            </div>
          </div>
        </div>
        <div className="column">
          <h3 className="is-size-4 has-text-centered has-text-weight-bold has-text-primary-30 py-2">Tools</h3>
          <div className="columns  has-text-centered">
            <div className="column">
              <Skill name="Tableau" img="https://i.imgur.com/5vAVbsR.png" />
              <Skill name="Git" img="https://i.imgur.com/fsh6mSr.png" />
            </div>
            <div className="column">
              <Skill name="Jupyter" img="https://i.imgur.com/O8dCb1q.png" />
              <Skill name="VSCode" img="https://i.imgur.com/S5s6XWy.png" />
            </div>
            <div className="column">
              <Skill name="Excel" img="https://i.imgur.com/OZwEbKP.png" />
            </div>
          </div>
        </div>
        <div className="column">
          <h3 className="is-size-4 has-text-centered has-text-weight-bold has-text-primary-30 py-2">Frameworks & libraries</h3>
          <div className="columns has-text-centered">
            <div className="column">
              <Skill name="PyTorch" img="https://i.imgur.com/bVE2ErA.png" />
              <Skill name="NumPy" img="https://i.imgur.com/gNzHU6R.png" />
              <Skill name="Seaborn" img="https://i.imgur.com/qE3DQbd.png" />
            </div>
            <div className="column">
              <Skill name="LlamaIndex" img="https://i.imgur.com/D59sZ8t.jpeg" />
              <Skill name="Scikit-learn" img="https://i.imgur.com/anCqpD5.png" />
              <Skill name="React" img="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" />
            </div>
            <div className="column">
              <Skill name="Pandas" img="https://i.imgur.com/0td6JvC.png" />
              <Skill name="Matplotlib" img="https://i.imgur.com/1qQQrG1.png" />
              <Skill name="Spring" img="https://i.imgur.com/YBm7tAN.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
