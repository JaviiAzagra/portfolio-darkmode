import React from 'react';
import "../styles/Hero.scss";
import pdf from "./JavierAzagraCV.pdf";
import linux from "../assets/linux-original.svg"
import html from "../assets/html5.svg"
import css from "../assets/css3-original-wordmark.svg"
import js from "../assets/javascript-original.svg"
import react from "../assets/react-original-wordmark.svg"
import angular from "../assets/angular.svg"
import node from "../assets/nodejs-original-wordmark.svg"
import mongo from "../assets/mongodb-original-wordmark.svg"


const Hero = () => {
  return (
    <div className="herocontainer" id="Home">
      <div className="hero">
        <div className="hero--container">
        <div className="img">
            {/* <img className="logo" src={hero.image} alt="" /> */}
          </div>
          <div className="card-hero">
            <h4>Full Stack Developer</h4>
            <h1 className="myname">Javier Azagra García</h1>
            <div className="info">
              <p>
                📍 Madrid
              </p>
              <p>
                📅 12/06/2000
              </p>
              <p>
                <a href="">📩 javiazagra12@gmail.com</a>
              </p>
              <p>
                <a href="https://github.com/JaviiAzagra" rel="noreferrer" target="_blank">
                  🗂️ GitHub
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="cv">
        <a
          className="cv__btn"
          href={pdf}
          download="JavierAzagraCV.pdf"
          rel="noopener noreferrer"
          target="_blank"
        >💾 Download CV
        </a>
      </div>
      <div className='habilities'>
            <img src={linux} alt="linux" />
            <img src={html} alt="html" />
            <img src={css} alt="css" />
            <img src={js} alt="js" />
            <img src={react} alt="react" />
            <img src={angular} alt="angular" />
            <img src={node} alt="node" />
            <img src={mongo} alt="mongo" />
      </div>
    </div>
  )
}

export default Hero