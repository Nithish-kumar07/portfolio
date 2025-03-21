import React from 'react';
import school from './Images/school.JPG';
import dip from './Images/PDIT.jpeg';
import tech from './Images/bestiu-lg.jpg';
import './education.css';

function Education() {
  return (
    <div className="education-container" id = "education">
      <h1 className="title">
        My <span className="highlight">Education</span>
      </h1>
      <div className="education-cards">
        <div className="education-card">
          <img className="edu-img" src={school} alt="School" />
          <p className="education-text">School Secondary Education <br/> Sri Vivekananda English Medium High School, Gorantla</p>
        </div>
        <div className="education-card">
          <img className="edu-img" src={dip} alt="Diploma college" />
          <p className="education-text">Diploma in Electrical and Electronics Engineering <br/> Priyadarshini Institute of Technology, Tirupathi</p>
        </div>
        <div className="education-card">
          <img className="edu-img" src={tech} alt="B.Tech college" />
          <p className="education-text">B.Tech in Computer Science and Engineering <br/> BEST Innovation University, Gownivaripalli</p>
        </div>
      </div>
    </div>
  );
}

export default Education;
