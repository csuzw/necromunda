import React from 'react';
import GangRosterBattle from './GangRosterBattle';

export default function GangRosterBattles(props) {

    return (
        <div className="gang-roster-battles">
            <table>
                <thead>
                    <tr>
                        <th>Scenario</th>
                        <th>Territory</th>
                        <th>Opponent</th>
                        <th>Out of Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.battles.map((battle, i) => <GangRosterBattle battle={battle} key={i} />)}
                </tbody>        
            </table>
        </div>
    );
}