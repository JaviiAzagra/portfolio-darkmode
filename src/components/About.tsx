import React from "react";
import "../styles/About.scss";

const About = () => {
  return (
    <div className="about" id="About">
      <div className="about-card">
        <h3>[ About Me ]</h3>
        <p className="about-p">
          Estudiante de Full Stack con mucha motivación para seguir aprendiendo
          y formándome.
        </p>
        <p className="about-p">
          Preparado para demostrar todas mis habilidades y trabajo en equipo
          para conseguir buenos resultados.
        </p>
        <p className="about-p">
          Me gusta la música, los coches y todo lo que tiene que ver con el
          mundo de la informática (Hardware y Software).
        </p>
      </div>
    </div>
  );
};

export default About;
