import React from 'react';

export default function Gallery(props) {
    return (
        <div className="gallery">
            <img className="main-image" src={process.env.PUBLIC_URL + '/img/gang.jpg'} alt="The gang" />
            <div className="fighter-images">
                {props.gang.fighters.filter(fighter => fighter.image).map((fighter, i) => <img className="fighter-image" key={i} src={process.env.PUBLIC_URL + fighter.image} alt={fighter.name} />)}
            </div>
        </div>
    );
}