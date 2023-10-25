export const Projects = () => {
  console.log("card");
  return (
    <div className="card">
      <div className="card-image-clinica"></div>
      <h4 className="card-title">Clínica Medica</h4>
      <p className="card-description">
        End of course project created with react
      </p>
      <div className="card-container-buttons">
        <a href="http://healthalgorithm.es/" target="_blank">
          Page
        </a>
        <a
          href="https://github.com/JaviiAzagra/front-proyectofinal"
          target="_blank"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export const Projects2 = () => {
  console.log("card");
  return (
    <div className="card">
      <div className="card-image-fourcorners"></div>
      <h4 className="card-title">Four Corners</h4>
      <p className="card-description">
        Sneakers and Clothes shop make with Angular
      </p>
      <div className="card-container-buttons">
        <a href="https://four-corners-rho.vercel.app/" target="_blank">
          Page
        </a>
        <a href="https://github.com/JaviiAzagra/Four-Corners" target="_blank">
          GitHub
        </a>
      </div>
    </div>
  );
};

export const Projects3 = () => {
  console.log("card");
  return (
    <div className="card">
      <div className="card-image-luxury"></div>
      <h4 className="card-title">Luxury Cars</h4>
      <p className="card-description">Luxury Cars page make with Angular</p>
      <div className="card-container-buttons">
        <a href="https://luxury-cars-two.vercel.app/" target="_blank">
          Page
        </a>
        <a
          href="https://github.com/JaviiAzagra/Luxury-Cars-Angular-Project"
          target="_blank"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export const Projects4 = () => {
  console.log("card");
  return (
    <div className="card">
      <div className="card-image-cine"></div>
      <h4 className="card-title">The Cinephile</h4>
      <p className="card-description">React Project</p>
      <div className="card-container-buttons">
        <a href="https://the-cinephile.vercel.app/" target="_blank">
          Page
        </a>
        <a
          href="https://github.com/Nagema/movies-final-project-react"
          target="_blank"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export const Projects5 = () => {
  console.log("card");
  return (
    <div className="card">
      <div className="card-image-dado"></div>
      <h4 className="card-title">Dado</h4>
      <p className="card-description">Dado created with JavaScript</p>
      <div className="card-container-buttons">
        <a href="https://dado-javiiazagra.vercel.app/" target="_blank">
          Page
        </a>
        <a href="https://github.com/JaviiAzagra/Dado" target="_blank">
          GitHub
        </a>
      </div>
    </div>
  );
};

export const Projects6 = () => {
  console.log("card");
  return (
    <div className="card">
      <div className="card-image-pokemon"></div>
      <h4 className="card-title">PokeApi</h4>
      <p className="card-description">PokeApi created with JavaScript</p>
      <div className="card-container-buttons">
        <a href="https://pokeapi-ruby.vercel.app/" target="_blank">
          Page
        </a>
        <a href="https://github.com/JaviiAzagra/Pokeapi" target="_blank">
          GitHub
        </a>
      </div>
    </div>
  );
};

export const Projects7 = () => {
  console.log("card");
  return (
    <div className="card">
      <div className="card-image-github"></div>
      <h4 className="card-title">GitHub Profile Clone</h4>
      <p className="card-description">
        A GitHub Profile Clone created with react.
      </p>
      <div className="card-container-buttons">
        <a href="https://github.com/JaviiAzagra" target="_blank">
          Page
        </a>
        <a href="https://github.com/JaviiAzagra/Github-Clone" target="_blank">
          GitHub
        </a>
      </div>
    </div>
  );
};

export const AllProjects = () => {
  return (
    <div className="title-projects" id="Projects">
      <h3>[ Projects ]</h3>
      <div className="grid-cards">
        <Projects />
        <Projects2 />
        <Projects3 />
        <Projects4 />
        <Projects5 />
        <Projects6 />
        <Projects7 />
      </div>
    </div>
  );
};
