import React from 'react';
import FighterCard from '../components/FighterCard.jsx';

export default function FighterCards(props) {
    return (
        <div className="fighter-cards">
            {props.fighters.map((fighter, i) => <FighterCard fighter={fighter} key={i} />)}
        </div>
    );
}