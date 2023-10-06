import React from 'react';
import "../styles/About.css";
import pdf from "./JavierAzagraCV.pdf";
import linux from "../assets/linux-original.svg"
import html from "../assets/html5.svg"
import css from "../assets/css3-original-wordmark.svg"
import js from "../assets/javascript-original.svg"
import react from "../assets/react-original-wordmark.svg"
import angular from "../assets/angular.svg"
import node from "../assets/nodejs-original-wordmark.svg"
import mongo from "../assets/mongodb-original-wordmark.svg"


const About = () => {
  return (
    <div className='containerabout'>
        <div className='titleabout'>
            {/* <h1>[ About Me ]</h1> */}
        </div>
        <div className='about'>
            <div className='img'>
            </div>
            <div className='text'>
              <div className='texttitle'>
              <h2>Full Stack Developer</h2>
              </div>
              <div className='textinfo'>
              <h3> [ Hi, I'm Javier Azagra ] </h3>
                <p>📍Madrid / Spain</p>
                <p>📅 12/06/2000</p>
                <p>📩 javiazagra12@gmail.com</p>
                <a href='https://github.com/JaviiAzagra' target='_blank'>🗂️ GitHub</a>
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
        >
          <p>💾 Download CV</p>
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

export default About