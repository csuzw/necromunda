import React from 'react';
import CharacteristicValue from './CharacteristicValue';

import { fighterHelper } from '../data/helpers/gangHelper';

export default function FighterCard(props) {

    const cost = fighterHelper.getCost(props.fighter);
    const weaponProfiles = fighterHelper.getWeaponProfiles(props.fighter);
    const borderColor = props.fighter.color ?? "black";

    return (
        <div className="fighter-card" style={{borderStyle: 'solid', borderWidth:'2px', borderColor: borderColor}}>
            <div className="fighter-title">
                <div className="fighter-name text-value">{props.fighter.name} ({props.fighter.type}{props.fighter.archetype ? ` - ${props.fighter.archetype}` : ''})</div>
                <div className="fighter-cost text-value text-numeric">{cost}</div>
            </div>
            <div className="fighter-characteristics">
                <div className="text-label">M</div>
                <div className="text-label">WS</div>
                <div className="text-label">BS</div>
                <div className="text-label">S</div>
                <div className="text-label">T</div>
                <div className="text-label">W</div>
                <div className="text-label">I</div>
                <div className="text-label">A</div>
                <div className="text-label">LD</div>
                <div className="text-label">CL</div>
                <div className="text-label">WIL</div>
                <div className="text-label">INT</div>
                <CharacteristicValue characteristic={props.fighter.characteristics.movement} direction={1} unit='"' />
                <CharacteristicValue characteristic={props.fighter.characteristics.weaponSkill} direction={-1} unit='+' />
                <CharacteristicValue characteristic={props.fighter.characteristics.ballisticSkill} direction={-1} unit='+' />
                <CharacteristicValue characteristic={props.fighter.characteristics.strength} direction={1} unit='' />
                <CharacteristicValue characteristic={props.fighter.characteristics.toughness} direction={1} unit='' />
                <CharacteristicValue characteristic={props.fighter.characteristics.wounds} direction={1} unit='' />
                <CharacteristicValue characteristic={props.fighter.characteristics.initiative} direction={-1} unit='+' />
                <CharacteristicValue characteristic={props.fighter.characteristics.attacks} direction={1} unit='' />
                <CharacteristicValue characteristic={props.fighter.characteristics.leadership} direction={-1} unit='+'is2d6={true} />
                <CharacteristicValue characteristic={props.fighter.characteristics.cool} direction={-1} unit='+'is2d6={true} />
                <CharacteristicValue characteristic={props.fighter.characteristics.willpower} direction={-1} unit='+'is2d6={true} />
                <CharacteristicValue characteristic={props.fighter.characteristics.intelligence} direction={-1} unit='+' is2d6={true} />
            </div>
            <div className={`fighter-weapons ${!weaponProfiles.length ? "display-none" : ""}`}>
                <div className="text-label text-left">Weapon</div>
                <div className="text-label">S</div>
                <div className="text-label">L</div>
                <div className="text-label">S</div>
                <div className="text-label">L</div>
                <div className="text-label">STR</div>
                <div className="text-label">AP</div>
                <div className="text-label">D</div>
                <div className="text-label">AM</div>
                <div className="text-label text-left">Traits</div>
                {weaponProfiles.map((weaponProfile, i) => (
                    <React.Fragment key={i}>
                        <div className="text-value">{weaponProfile.name}</div>
                        <div className="text-value text-center">{weaponProfile.range?.short}</div>
                        <div className="text-value text-center">{weaponProfile.range?.long}</div>
                        <div className="text-value text-center">{weaponProfile.accuracy?.short}</div>
                        <div className="text-value text-center">{weaponProfile.accuracy?.long}</div>
                        <div className="text-value text-center">{weaponProfile.strength}</div>
                        <div className="text-value text-center">{weaponProfile.armourPenetration}</div>
                        <div className="text-value text-center">{weaponProfile.damage}</div>
                        <div className="text-value text-center">{weaponProfile.ammo}</div>
                        <div className="text-value">{weaponProfile.traits?.join(", ")}</div>
                    </React.Fragment>
                ))}
            </div>
            <div className="fighter-skills-and-wargear">
                <div className="text-label text-left">Skills</div>
                <div className="text-value">{fighterHelper.getSkillsDisplayText(props.fighter)}&nbsp;</div>
                <div className="text-label text-left">Wargear</div>
                <div className="text-value">{fighterHelper.getWargearDisplayText(props.fighter)}&nbsp;</div>
                <div className="text-label text-left">Rules</div>
                <div className="text-value">{fighterHelper.getRulesDisplayText(props.fighter)}&nbsp;</div>
            </div>
        </div>
    );
}