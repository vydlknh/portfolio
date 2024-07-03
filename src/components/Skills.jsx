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
              <Skill name="Python" img="/src/icons/python.png" />
              <Skill name="Java" img="/src/icons/java.png" />
            </div>
            <div className="column">
              <Skill name="MySQL" img="/src/icons/mysql.png" />
              <Skill name="C++" img="/src/icons/cpp.png" />
            </div>
            <div className="column">
              <Skill name="Javascript" img="/src/icons/js.png" />
              <Skill name="Matlab" img="/src/icons/matlab.png" />
            </div>
          </div>
        </div>
        <div className="column">
          <h3 className="is-size-4 has-text-centered has-text-weight-bold has-text-primary-30 py-2">Tools</h3>
          <div className="columns  has-text-centered">
            <div className="column">
              <Skill name="Tableau" img="/src/icons/tableau.png" />
              <Skill name="Git" img="/src/icons/git.png" />
            </div>
            <div className="column">
              <Skill name="Jupyter" img="/src/icons/jupyter.png" />
              <Skill name="VSCode" img="/src/icons/vsc.png" />
            </div>
            <div className="column">
              <Skill name="Excel" img="/src/icons/excel.png" />
            </div>
          </div>
        </div>
        <div className="column">
          <h3 className="is-size-4 has-text-centered has-text-weight-bold has-text-primary-30 py-2">Frameworks & libraries</h3>
          <div className="columns has-text-centered">
            <div className="column">
              <Skill name="PyTorch" img="/src/icons/pytorch.png" />
              <Skill name="NumPy" img="/src/icons/np.png" />
              <Skill name="Seaborn" img="/src/icons/sb.png" />
            </div>
            <div className="column">
              <Skill name="LlamaIndex" img="/src/icons/li.jpeg" />
              <Skill name="Scikit-learn" img="/src/icons/skl.png" />
              <Skill name="React" img="/src/icons/react.webp" />
            </div>
            <div className="column">
              <Skill name="Pandas" img="/src/icons/pd.png" />
              <Skill name="Matplotlib" img="/src/icons/mpl.png" />
              <Skill name="Spring" img="/src/icons/spring.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
