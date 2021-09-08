import React from 'react';
import Tilt from 'react-vanilla-tilt';

export const TopicCard = ({src,name}) => {
    return (
        <Tilt className='topic-card-container' options={{ glare: true, speed: 400, max: 35 }}>
            <a href={`/topic/${src}`} className="topic">
                <div className='card'>
                    <div className='content'>
                        <img src={`./my-codepen/assets/topics/${src}.svg`} alt={`${name.toUpperCase()} Logo`} />
                        <h3>{name}</h3>
                    </div>
                </div>
            </a>
        </Tilt>
    )
}
