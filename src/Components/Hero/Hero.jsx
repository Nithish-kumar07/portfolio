// import React from "react";
// import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
// import "./hero.css";
// import Myimage from "../../Images/Nithish.jpg";
// import Resume from '../../Images/TCS RESUME.pdf';

// const Hero = () => {
//   return (
//     <section className="hero" id="Home">
//       <div className="hero-content">
//         <div className="hero-text">
//           <h3>Hello, It's Me </h3>
//           <h1>
//             Nithish <span className="highlight">Basireddy</span>
//           </h1>
//           <h3>
//             And I'm a <span className="profession">Web Developer</span>
//           </h3>
//           <p>
//             This is my official portfolio website which shows all
//             <br />
//             details and work experience in web development.
//           </p>
//         </div>

//         <div className="social-icons">
//         <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//             <FaLinkedin />
//           </a>
//           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//             <FaTwitter />
//           </a>
//           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//             <FaFacebook />
//           </a>
//           <a href="https://github.com/Nithish-kumar07" target="_blank" rel="noopener noreferrer">
//             <FaGithub />
//           </a>
//         </div>

//         <div className="btn">
//           <a href={Resume} download>
//             <button className="btn">My Resume</button>
//           </a>
//         </div>
//       </div>

//       <div className="hero-image">
//         <img src={Myimage} alt="Nithish Basireddy" />
//       </div>
//     </section>
//   );
// };

// export default Hero;



// import React, { useState, useEffect } from "react";
// import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
// import "./hero.css";
// import Myimage from "../../Images/Nithish.jpg";
// import Resume from '../../Images/TCS RESUME.pdf';

// const professions = ["Web Developer", "MERN Full Stack Developer", "React.js Developer", "Software Engineer"];

// const Hero = () => {
//   const [currentProfession, setCurrentProfession] = useState(professions[0]);

//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       index = (index + 1) % professions.length;
//       setCurrentProfession(professions[index]);
//     }, 2000); // Change profession every 2 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="hero" id="Home">
//       <div className="hero-content">
//         <div className="hero-text">
//           <h3>Hello, It's Me </h3>
//           <h1>
//             Nithish <span className="highlight">Basireddy</span>
//           </h1>
//           <h3>
//             And I'm a <span className="profession">{currentProfession}</span>
//           </h3>
//           <p>
//             This is my official portfolio website which shows all
//             <br />
//             details and work experience in web development.
//           </p>
//         </div>

//         <div className="social-icons">
//           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//             <FaLinkedin />
//           </a>
//           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//             <FaTwitter />
//           </a>
//           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//             <FaFacebook />
//           </a>
//           <a href="https://github.com/Nithish-kumar07" target="_blank" rel="noopener noreferrer">
//             <FaGithub />
//           </a>
//         </div>

//         <div className="btn">
//           <a href={Resume} download>
//             <button className="btn">My Resume</button>
//           </a>
//         </div>
//       </div>

//       <div className="hero-image">
//         <img src={Myimage} alt="Nithish Basireddy" />
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React, { useState, useEffect } from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import "./hero.css";
import Myimage from "../../Images/Nithish.jpg";
import myimage from '../../Images/nithish1.jpg';
import picture from '../../Images/nithish2.jpg'
import Resume from '../../Images/TCS RESUME.pdf';

const professions = ["Web Developer", "React.js Developer", "MongoDB Expert"];
const images = [Myimage, myimage, picture]

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [imageindex, setImageIndex] = useState(0);
  const holdTime = 1000; 


  useEffect(() => {
    if (charIndex === professions[loopIndex].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), holdTime);
      return;
    }
    
    if (charIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setLoopIndex((prev) => (prev + 1) % professions.length);
      return;
    }

    const timeout = setTimeout(() => {
      setText(professions[loopIndex].substring(0, charIndex));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 100 : 150); 

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, loopIndex]);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(imageInterval);
  }, []); 

  return (
    <section className="hero" id="Home">
      <div className="hero-content">
        <div className="hero-text">
          <h3>Hello, It's Me </h3>
          <h1>
            Nithish <span className="highlight">Basireddy</span>
          </h1>
          <h3>
            And I'm a <span className="profession">{text}</span><span className="cursor">|</span>
          </h3>
          <p>
            This is my official portfolio website which shows all
            <br />
            details and work experience in web development.
          </p>
        </div>

        <div className="social-icons">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://github.com/Nithish-kumar07" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>

        <div className="btn">
          <a href={Resume} download>
            <button className="btn">My Resume</button>
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={images[imageindex]} alt="Nithish Basireddy" />
      </div>
    </section>
  );
};

export default Hero;

