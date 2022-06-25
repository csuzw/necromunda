import React from 'react';

import { gangHelper } from '../data/helpers/gangHelper';

export default function GangRosterSummary(props) {
    return (
        <div className="gang-summary">
            <div className="gang-name gang-summary-group">
                <div className="text-label">Gang Name</div>
                <div className="text-value">{props.gang.name}</div>
            </div>
            <div className="gang-house gang-summary-group">
                <div className="text-label">House</div>
                <div className="text-value">{gangHelper.getHouseDisplayText(props.gang)}</div>
            </div>
            <div className="gang-values gang-summary-group">
                <div className="gang-rating">
                    <div className="text-label text-sm">Gang Rating</div>
                    <div className="text-value text-numeric">{gangHelper.getRatingDisplayText(props.gang)}</div>
                </div>
                <div className="gang-reputation">
                    <div className="text-label text-sm">Reputation</div>
                    <div className="text-value text-numeric">{props.gang.reputation}</div>
                </div>
                <div className="gang-wealth">
                    <div className="text-label text-sm">Wealth</div>
                    <div className="text-value text-numeric">{gangHelper.getWealthDisplayText(props.gang)}</div>
                </div>
            </div>
            <div className="gang-territories gang-summary-group">
                <div className="text-label">Territories Held</div>
                {props.gang.territories.map((territory, i) => <div className="text-value" key={i}>{territory}</div>)}               
            </div>
            <div className="gang-stash gang-summary-group">
                <div className="text-label">Stash</div>
                <div className="gang-stash-credits">
                    <div className="text-label text-sm text-left">Credits</div>
                    <div className="text-value text-numeric">{props.gang.stash.credits}</div>
                </div>
                <div className="gang-stash-weapons">
                    <div className="text-label text-sm text-left">Weapons</div>
                    <div className="text-value">{gangHelper.getStashWeaponsDisplayText(props.gang)}</div>
                </div>
                <div className="gang-stash-wargear">
                    <div className="text-label text-sm text-left">Wargear</div>
                    <div className="text-value">{gangHelper.getStashWargearDisplayText(props.gang)}</div>
                </div>
            </div>
        </div>
    );
}