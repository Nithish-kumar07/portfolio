import React from "react";
import "./about.css";
import Pic from "../../front/src/Images/about.jpg";

function About() {
  return (
    <section className="about" id="About">
      <div className="about-container">
        <div className="about-img">
          <img src={Pic} alt="Nithish" />
        </div>

        <div className="about-content">
          <h2 className="heading">
            About <span className="about-me">Me</span>
          </h2>
          <h3>
            Web <span className="developer">Developer!</span>
          </h3>
          <p>
            Hey, I'm Nithish! I'm currently pursuing my B.Tech at Bharatiya
            Engineering Science and Technology Innovation University. Passionate
            about coding and creativity, I'm on my journey to becoming a skilled
            web developer, eager to build dynamic and user-friendly web
            experiences.
          </p>
          {/* <a href="images/about.html" className="bnt">
            Read More
          </a> */}
        </div>
      </div>
    </section>
  );
}

export default About;
