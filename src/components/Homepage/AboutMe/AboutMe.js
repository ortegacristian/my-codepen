import React from 'react'

export const AboutMe = () => {
    return (
        <section className='aboutMe'>
            <div className='width-wrapper'>
                <div className='about-me-wrapper'>
                    <div className="about-me-description">
                        <h2>¿Quien soy?</h2>
                        <p>(Por escribir)</p>
                        <a href="/about/me" className="about-me-button" data-color="green">Conoceme!</a>
                    </div>
                    <h3>Algunas de las herramientas y tecnologías con las que suelo trabajar:</h3>
                    <div className="about-me-logos">
                        <img src="/" alt="Html" />
                        <img src="/" alt="Javascript" />
                        <img src="/" alt="Css" />
                        <img src="" alt="jQuery" />
                        <img src="" alt="React" />
                        <img src="/" alt="C#" />
                        <img src="/" alt="Node.js" />
                        <img src="/" alt="SQL" />
                        <img src="/" alt="MongoDB" />
                    </div>
                </div>
            </div>
        </section>
    );
}
