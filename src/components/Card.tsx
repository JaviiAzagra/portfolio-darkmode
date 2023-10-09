export const Card = () => {
    console.log('card')
    return (
        <div className="card">
            <div className="card-image-clinica"></div>
            <h4 className="card-title">Clínica Medica</h4>
            <p className="card-description">Thesis make with React</p>
            <div className="card-container-buttons">
                <a href="http://healthalgorithm.es/" target="_blank">Page</a>
                <a href="https://github.com/JaviiAzagra/front-proyectofinal" target="_blank">GitHub</a>
            </div>
        </div>
    )
}

export const Card2 = () => {
    console.log('card')
    return (
        <div className="card">
            <div className="card-image-fourcorners"></div>
            <h4 className="card-title">Four Corners</h4>
            <p className="card-description">Sneakers and Clothes shop make with Angular</p>
            <div className="card-container-buttons">
                <a href="https://four-corners-rho.vercel.app/" target="_blank">Page</a>
                <a href="https://github.com/JaviiAzagra/Four-Corners" target="_blank">GitHub</a>
            </div>
        </div>
    )
}

export const Card3 = () => {
    console.log('card')
    return (
        <div className="card">
            <div className="card-image-luxury"></div>
            <h4 className="card-title">Luxury Cars</h4>
            <p className="card-description">Luxury Cars page make with Angular</p>
            <div className="card-container-buttons">
                <a href="https://luxury-cars-two.vercel.app/" target="_blank">Page</a>
                <a href="https://github.com/JaviiAzagra/Luxury-Cars-Angular-Project" target="_blank">GitHub</a>
            </div>
        </div>
    )
}

export const LayoutCards = () => {
    return (
        <div className="title-projects" id="Projects">
            <h3>[ Projects ]</h3>
            <div className="grid-cards">
            <Card />
            <Card2 />
            <Card3 />
        </div>
        </div>
        
    )
}