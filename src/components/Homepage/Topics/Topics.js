import React from 'react'
import { TopicCard } from './TopicCard/TopicCard'

export const Topics = () => {
    return (
        <section className='topics'>
            <div className='width-wrapper'>
                <div className='topic-wrapper'>
                    <div className='explore-topics'>
                        <div>
                            <h2>Empieza enseguida</h2>
                            <p>Inspírate con los ejemplos utilizando frameworks, librerias y patrones de diseño.</p>
                            <a href="/topics/" className="text-button">Explorar más temas</a>
                        </div>
                    </div>
                    <TopicCard src="html-5" name="Html 5" />
                    <TopicCard src="javascript" name="Javascript" />
                    <TopicCard src="css" name="CSS" />
                    <TopicCard src="sass" name="Sass" />
                    <TopicCard src="ui-patterns" name="UI Patterns" />
                </div>
            </div>
        </section>
    )
}
