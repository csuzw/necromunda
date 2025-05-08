import React from 'react';

export default function TacticCard(props) {
    return (
        <div className="tactic-card">
            <div className="text-label text-left">{props.tactic.name} ({props.tactic.type})</div>
            <div className="text-value">{props.tactic.use}</div>
            <div className="text-value fill-space">{props.tactic.text}</div>
        </div>
    );
}