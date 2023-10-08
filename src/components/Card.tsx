export const Card = () => {
    console.log('card')
    return (
        <div className="card">
            <div className="card-image"></div>
            <h4 className="card-title">Clínica Medica</h4>
            <p className="card-description">Thesis make with React</p>
            <div className="card-container-buttons">
                <button>Page</button>
                <button>GitHub</button>
            </div>
        </div>
    )
}

export const Card2 = () => {
    console.log('card')
    return (
        <div className="card">
            <div className="card-image"></div>
            <h4 className="card-title">Four Corners</h4>
            <p className="card-description">Sneakers and Clothes shop make with Angular</p>
            <div className="card-container-buttons">
                <button>Page</button>
                <button>GitHub</button>
            </div>
        </div>
    )
}

export const Card3 = () => {
    console.log('card')
    return (
        <div className="card">
            <div className="card-image"></div>
            <h4 className="card-title">Luxury Cars</h4>
            <p className="card-description">Luxury Cars page make with Angular</p>
            <div className="card-container-buttons">
                <button>Page</button>
                <button>GitHub</button>
            </div>
        </div>
    )
}

export const LayoutCards = () => {
    return (
        <div className="grid-cards">
            <Card />
            <Card2 />
            <Card3 />
        </div>
    )
}