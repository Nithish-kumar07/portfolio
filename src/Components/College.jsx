import React from 'react';
import './college.css';
import awards from'../Images/awards.webp';
import best from '../Images/best college.jpg';
import image from '../Images/best image 2.jpg';
import logo from '../Images/best logo.png';
import rupa from '../Images/rupavasudevan.jpg';

function College() {
  return (
    <>
      <div className="wrapper">
        <header id="header">
          <div className="header-wrapper">
            <div className="header-container">
              <div>
                <div className="logo-name">
                  <div className="logo"></div>
                  <div className="name">
                    <a href="index.html" title="">
                      <img
                        className="blogo"
                        src={logo}
                        alt="BEST Innovation University Logo"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="header-links">
                <a
                  href="/"
                  data-toggle="popover"
                  title="Address"
                  data-content="BEST Innovation University Head Quarters, Gownivaripalli, Gorantla, Andhra Pradesh 515231"
                  data-placement="bottom"
                >
                  <i className="fa fa-map-marker fa-lg" aria-hidden="true"></i>
                </a>

                <a
                  href="/"
                  data-toggle="popover"
                  title="Phone No."
                  data-content="++91-8310193870"
                  data-placement="bottom"
                >
                  <i className="fa fa-phone fa-lg" aria-hidden="true"></i>
                </a>

                <a
                  href="/"
                  data-toggle="popover"
                  title="Email"
                  data-content="info@bestiu.edu.in"
                  data-placement="bottom"
                >
                  <i className="fa fa-envelope fa-lg" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </header>

        <div className="carousel-wrapper">
          <div className="carousel" style={{ margin: "0 auto" }}>
            <div className="carousel-items">
              <img
                height="400px"
                src={image}
                alt="Faculty"
              />
            </div>
            <div className="carousel-items">
              <img
                height="400px"
                src={best}
                alt="Gallery"
              />
            </div>
            <div className="carousel-items">
              <img
                height="400px"
                src={rupa}
                alt="Students"
              />
            </div>
            <div className="carousel-items">
              <img
                height="400px"
                src={awards}
                alt="Talk"
                className="pic"
              />
            </div>
          </div>
        </div>

        <footer>
          <div className="footer-wrapper">
            <span className="logo">
              <img src={logo} alt="BEST Logo" />
            </span>
            <div className="row">
              <div className="col-sm-4 address">
                <strong>Address: </strong>
                BEST Innovation University Head Quarters, Gownivaripalli, Gorantla, Andhra Pradesh 515231
              </div>
              <div className="col-sm-4 links">
                <div>
                  <a href="#news">News</a>
                  <i className="separator"></i>
                  <a href="#announcements">Announcement</a>
                  <i className="separator"></i>
                  <a href="#events">Events</a>
                </div>
                <div>
                  <a href="#Home">Home</a>
                  <i className="separator"></i>
                  <a href="#RTI">RTI</a>
                  <i className="separator"></i>
                  <a href="#MOU">MOU</a>
                </div>
                <div>
                  <a href="admissions.html">Admission</a>
                  <i className="separator"></i>
                  <a href="student_corner.html">Student</a>
                  <i className="separator"></i>
                  <a href="faculty.html">Faculty</a>
                </div>
              </div>
              <div className="col-sm-4 footer-social">
                <a href="https://www.facebook.com/bestiu20">
                  <i className="fa fa-facebook" aria-hidden="true" title="Official Facebook Page"></i>
                </a>
                <a href="nithish">
                  <i className="fa fa-github" aria-hidden="true" title="Github Group"></i>
                </a>
                <a href="https://www.linkedin.com/school/bestiu20/">
                  <i className="fa fa-linkedin" aria-hidden="true" title="LinkedIn Profile"></i>
                </a>
                <a href="#!" title="">
                  <i className="fa fa-twitter" aria-hidden="true" title="Official Twitter Account"></i>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default College;
