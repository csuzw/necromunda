import React from 'react';
import TacticCard from '../components/TacticCard.jsx';

export default function TacticCards(props) {

    return (
        <div className="tactic-cards">
            {props.deck.sort((a, b) => a.name.localeCompare(b.name)).map((tactic, i) => <TacticCard tactic={tactic} key={i} />)}
        </div>
    );
}