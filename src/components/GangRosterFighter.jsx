import React from 'react';
import { BsCheck2 } from 'react-icons/bs';

import { fighterHelper } from '../data/gangHelper';

export default function GangRosterFighter(props) {

    const cost = fighterHelper.getCost(props.fighter);

    return (
        <tr>
            <td className="text-value">{props.fighter.name}</td>
            <td className="text-value">{props.fighter.type}</td>
            <td className="text-value text-numeric">{cost}</td>
            <td className="text-value text-numeric">{props.fighter.experience}</td>
            <td className="text-value text-numeric">{props.fighter.advancements}</td>
            <td className="text-value text-center">{props.fighter.inRecovery ? <BsCheck2 /> : ""}</td>
            <td className="text-value">{props.fighter.capturedBy}</td>
            <td className="text-value">{props.fighter.lastingInjuries}</td>
        </tr>
    );
}