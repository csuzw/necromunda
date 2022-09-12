import React from 'react';

import { gangHelper } from '../data/helpers/gangHelper';

export default function GangRosterSummary(props) {

    let stashWeaponsDisplayText = gangHelper.getStashWeaponsDisplayText(props.gang);
    let stashWargearDisplayText = gangHelper.getStashWargearDisplayText(props.gang);
    let territories = props.gang.territories.length ? props.gang.territories : [ "\u200b", "\u200b", "\u200b", "\u200b", "\u200b" ];
    return (
        <div className="gang-summary">
            <div className="gang-name gang-summary-group">
                <div className="text-label">Gang Name</div>
                <div className="text-value">{props.gang.name}</div>
                <div className="text-label">House</div>
                <div className="text-value">{gangHelper.getHouseDisplayText(props.gang)}</div>
            </div>
            <div className="gang-values gang-summary-group">
                    <div className="text-label">Gang Rating</div>
                    <div className="text-value text-numeric">{gangHelper.getRatingDisplayText(props.gang)}</div>
                    <div className="text-label">Reputation</div>
                    <div className="text-value text-numeric">{props.gang.reputation}</div>
                    <div className="text-label">Wealth</div>
                    <div className="text-value text-numeric">{gangHelper.getWealthDisplayText(props.gang)}</div>
            </div>
            <div className="gang-territories gang-summary-group">
                <div className="text-label">Territories Held</div>
                {territories.map((territory, i) => <div className="text-value" key={i}>{territory}</div>)}               
            </div>
            <div className="gang-stash gang-summary-group">
                <div className="text-label">Stash</div>
                <div className="gang-stash-credits">
                    <div className="text-label text-sm text-left">Credits</div>
                    <div className="text-value text-numeric">{props.gang.stash.credits}</div>
                </div>
                <div className="gang-stash-weapons">
                    <div className="text-label text-sm text-left">Weapons</div>
                    <div className="text-value">{(stashWeaponsDisplayText) ? stashWeaponsDisplayText : "\u200b"}</div>
                </div>
                <div className="gang-stash-wargear">
                    <div className="text-label text-sm text-left">Wargear</div>
                    <div className="text-value">{(stashWargearDisplayText) ? stashWargearDisplayText : "\u200b"}</div>
                </div>
            </div>
        </div>
    );
}