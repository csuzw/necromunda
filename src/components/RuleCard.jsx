import React from 'react';

export default function RuleCard(props) {
    return (
        <div className="rule-card">
            <div className="text-label text-left">{props.rule.name}</div>
            <div className="text-value">{props.rule.text}</div>            
        </div>
    );
}