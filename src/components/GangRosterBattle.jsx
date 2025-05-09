import React from 'react';

export default function GangRosterBattle(props) {
    return (
        <>
            <tr className={props.battle.success ? "battle-success" : "battle-failure"}>
                <td className="text-value">{props.battle.scenario}</td>
                <td className="text-value">{props.battle.territory}</td>
                <td className="text-value">{props.battle.opponentName} ({props.battle.opponentHouse})</td>
                <td className="text-value"><span className="battle-me">{props.battle.outOfAction.me}</span>/<span className="battle-opponent">{props.battle.outOfAction.opponent}</span></td>
                <td className="text-value">{props.battle.tacticsUsed.join(", ")}</td>
            </tr>
            <tr>
                <td className="text-value" colspan="3">{props.battle.text}</td>
                <td colspan="2"><img className="battle-image" src={process.env.PUBLIC_URL + props.battle.image} alt={props.battle.image} /></td>
            </tr>
        </>
    );
}