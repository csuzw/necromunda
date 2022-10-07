import React from 'react';
import GangNarrative from './GangNarrative';

export default function Gallery(props) {
    return (
        <div className="gallery">
            <img className="main-image" src={process.env.PUBLIC_URL + '/img/gang.jpg'} alt={process.env.REACT_APP_GANG_NAME} title={process.env.REACT_APP_GANG_NAME} />

            <GangNarrative />

            <div className="fighter-images">
                {props.gang.fighters.filter(fighter => fighter.image).map((fighter, i) => <img className="fighter-image" key={i} src={process.env.PUBLIC_URL + fighter.image} alt={fighter.name} title={fighter.name} />)}
            </div>
        </div>
    );
}