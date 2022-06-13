import React from 'react';
import GangRosterFighter from './GangRosterFighter';

export default function GangRosterFighters(props) {

    return (
        <div className="gang-roster-fighters">
            <table>
                <thead>
                    <tr>
                        <th>Fighter Name</th>
                        <th>Type</th>
                        <th>Cost</th>
                        <th>XP</th>
                        <th>Advancements</th>
                        <th>In Recovery?</th>
                        <th>Captured By</th>
                        <th>Lasting Injuries</th>
                    </tr>
                </thead>
                <tbody>
                    {props.fighters.map((fighter, i) => <GangRosterFighter fighter={fighter} key={i} />)}
                </tbody>        
            </table>
        </div>
    );
}