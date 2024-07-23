import Project from "../components/Project"


function Projects() {

  return (
    <section id="projects" className="container py-5">
      <h2 className="title has-text-primary">Projects</h2>
      <div className="columns">
        <div className="column">
          <Project 
            name="Breast cancer classification" 
            desc="This project uses the breast cancer dataset from sklearn and classifies whether a case is benign or malignant using a neural network constructed using PyTorch" 
            url="https://github.com/vydlknh/breast_cancer_classification"
            img="https://i.imgur.com/r3VEkHK.png" 
          />
        </div>
        <div className="column">
          <Project 
            name="NBA Players Statistics Analysis" 
            desc="This project analyzes players' statistics for the NBA 2023-2024 playoffs" 
            url="https://github.com/vydlknh/nba-stats"
            img="https://i.imgur.com/faUudZv.png"
          />
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <Project 
            name="Weather prediction using periodic model" 
            desc="This project aims to find a periodic function of best fit for weather data from 2012 to 2015, and predict upcoming weather based on this model.
            This project is part of the Numerical Analysis course." 
            url="https://github.com/vydlknh/weather-prediction" 
            img="https://i.imgur.com/1EkJ7g2.png"
          />
        </div>
        <div className="column">
          <Project 
            name="Football match prediction using Random Forest Classifier" 
            desc="This project utilized the Random Forest Classifier model to predict the winner of the EPL, using data scraped from FBref." 
            url="https://github.com/vydlknh/match-prediction"
            img="https://i.imgur.com/e5i35Tg.png" 
          />
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <Project 
            name="FarmFinder" 
            desc="This is a web app directory of farmers' market, where user can look for nearby farmers' market from one of four databases obtained, cleaned and processed
            from the USDA, and filter using states or zip codes. This project won 3rd place at DePauw's annual hackathon, TigerHacks." 
            url="https://github.com/vydlknh/farmfinder"
            img="https://i.imgur.com/pZT1cp6.png" 
          />
        </div>
        <div className="column">
          <Project 
            name="MusicHub" 
            desc="This is a web app for user to create music-related posts and upvote on existing posts. The app is created using ReactJS
            and is connected to an external database (Supabase) to facilitate CRUD operations on posts." 
            url="https://github.com/vydlknh/musichub"
            img="https://i.imgur.com/0vUVSam.gif" 
          />
        </div>
        <div className="column">
          <Project 
            name="Portfolio" 
            desc="Source code for this personal portfolio" 
            url="https://github.com/vydlknh/portfolio"
            img="https://i.imgur.com/EP0o1Yr.png" 
          />
        </div>
      </div>
    </section>
  )
}

export default Projects
