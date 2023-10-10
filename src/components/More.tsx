import React from 'react'
import "../styles/More.scss";

const More = () => {
  return (
    <div className='containermore' id='Experience'>

        <div>
            <h3>[ Education ]</h3>
            <div className='container'>

              <div className='container--text'>
              <p className="name">🔲 Bootcamp Full Stack Developer Full Time</p>
                <p className='site'><strong>Upgrade Hub, Madrid</strong></p>
                <p>Sep 2022 - Dec 2022</p>
              </div>

              <div className='container--text'>
                <p className="name">🔲 Master en Big Data and Data Science</p>
                  <p className='site'><strong>Universidad Complutense, Madrid</strong></p>
                  <p>Sep 2021 - Sep 2022</p>
              </div>

              <div className='container--text'>
                <p className="name">🔲 Grado Superior en Administración de Sistemas Informáticos en Red</p>
                  <p className='site'><strong>Universidad Complutense, Madrid</strong></p>
                  <p>2019 - 2021</p>
                </div>

              <div className='container--text'>
                <p className="name">🔲 Bachillerato en Ciencias Tecnológicas</p>
                  <p className='site'><strong>Colegio Santa Helena, Alcobendas, Madrid</strong></p>
                  <p>2016 - 2019</p>
              </div>

            </div>
            
        </div>

        <div>
          <h3>[ Experience ]</h3>
          <div className='container'>

                <div className='container--text'>
                <p className="name">🔲 Técnico de soporte IT</p>
                  <p className='site'><strong>Primavera Sound, Madrid</strong></p>
                  <p>25/05/2023 - 16/06/2023</p>
                </div>

                <div className='container--text'>
                  <p className="name">🔲 Técnico de soporte IT</p>
                    <p className='site'><strong>Alten, Madrid</strong></p>
                    <p>05/04/2021 - 8/06/2021</p>
                  </div>

              </div>
        </div>

        <div>
          <h3>[ Languages ]</h3>
          <div className='container'>
                <div className='container--text'>
                    <p className='site'>Spanish -{'>'} Native</p>
                </div>

                <div className='container--text'>
                    <p className='site'>English -{'>'} Medium Level</p>
                </div>
 
              </div>
        </div>

    </div>
  )
}

export default More