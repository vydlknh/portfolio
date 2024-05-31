import Project from "../components/Project"

function Projects() {

  return (
    <>
    <h2>Projects</h2>
    <div className="columns">
      <div className="column">
        <Project 
          name="Weather prediction using periodic model" 
          desc="This project aims to find a periodic function of best fit for weather data from 2012 to 2015, and predict upcoming weather based on this model.
          This project is part of the Numerical Analysis course." 
          img="" 
        />
      </div>
      <div className="column">
        <Project 
          name="Football match prediction using Random Forest Classifier" 
          desc="This project utilized the Random Forest Classifier model to predict the winner of the EPL, using data scraped from FBref." 
          img="" 
        />
      </div>
      <div className="column">
        <Project 
          name="FarmFinder" 
          desc="This is a web app directory of farmers' market, where user can look for nearby farmers' market from one of four databases obtained, cleaned and processed
          from the USDA, and filter using states or zip codes. This project won 3rd place at DePauw's annual hackathon, TigerHacks." 
          img="" 
        />
      </div>
    </div>
    </>
  )
}

export default Projects
