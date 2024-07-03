import Skill from "../components/Skill"

function Skills() {

  return (
    <div id="skills" className="container py-5">
      <h1 className="title has-text-primary">Skills</h1>
      <div className="columns">
        <div className="column">
          <h3 className="is-size-4 has-text-centered has-text-weight-bold has-text-primary-30 py-1">Programming languages</h3>
          <div className="columns">
            <div className="column">
              <Skill name="Python" img="" />
              <Skill name="Java" img="" />
            </div>
            <div className="column">
              <Skill name="SQL" img="" />
              <Skill name="C++" img="" />
            </div>
            <div className="column">
              <Skill name="Javascript" img="" />
              <Skill name="Matlab" img="" />
            </div>
          </div>
        </div>
        <div className="column">
          <h3 className="is-size-4 has-text-centered has-text-weight-bold has-text-primary-30 py-1">Tools</h3>
          <div className="columns">
            <div className="column">
              <Skill name="Tableau" img="" />
              <Skill name="Git" img="" />
            </div>
            <div className="column">
              <Skill name="Jupyter Notebook" img="" />
              <Skill name="VSCode" img="" />
            </div>
            <div className="column">
              <Skill name="Excel" img="" />
            </div>
          </div>
        </div>
        <div className="column">
          <h3 className="is-size-4 has-text-centered has-text-weight-bold has-text-primary-30 py-1">Frameworks & libraries</h3>
          <div className="columns">
            <div className="column">
              <Skill name="PyTorch" img="" />
              <Skill name="NumPy" img="" />
              <Skill name="Seaborn" img="" />
            </div>
            <div className="column">
              <Skill name="LlamaIndex" img="" />
              <Skill name="Scikit-learn" img="" />
              <Skill name="React" img="" />
            </div>
            <div className="column">
              <Skill name="Pandas" img="" />
              <Skill name="Matplotlib" img="" />
              <Skill name="Spring" img="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
