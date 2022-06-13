import React from 'react';
import GangRosterSummary from './GangRosterSummary';
import GangRosterFighters from './GangRosterFighters';

export default function GangRoster(props) {
    return (
        <div className="gang-roster">
            <GangRosterSummary gang={props.gang} />
            <GangRosterFighters fighters={props.gang.fighters} />
        </div>
    );
}