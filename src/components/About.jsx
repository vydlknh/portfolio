import React, { useEffect, useState } from "react";

function About() {

  return (
    <div id="about" className="container">
      <h1 className="title">About me</h1>
      <div className="columns">
        <div className="column">
          <p>I am a undergraduate at DePauw University, with a double major in Computer Science and Mathematics. 
            Originally from Hanoi, Vietnam, I currently live in Greencastle, Indiana.
          </p>
          <br />
          <p>While having past experience with web development, I am interested in working in Data Science. 
            I am passionate about Machine Learning, specifically neural networks, and its applications in healthcare and medical research.
          </p>
          <br />
          <p>Curiousity is my greatest personality trait. I am never not eager to learn something new, and my extensive list of
            hobbies and interests is proof of that. Gaming, weightlifting, crochet, photography, the list goes on.
          </p>
        </div>
        <div className="column is-two-fifths">
          <p className="pb-2"> <i class="fa-solid fa-repeat"></i> Currently on repeat:</p>
          <iframe src="https://open.spotify.com/embed/track/0Qh8dlEJ3jVWk57Ql6XrdS?utm_source=generator&theme=0" 
          width="100%" height="230" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy"></iframe>
        </div>
      </div>
    </div>
  )
}

export default About