import equipmentHelper from "./equipmentHelper";

import { rules as Rules } from '../equipment';

const getWargear = (fighter) => {
    const weaponWargear = fighter.weapons.flatMap(weapon => weapon?.wargear ?? []);
    return fighter.wargear.concat(weaponWargear);
}

export const fighterHelper = {
    
    getCost: (fighter) => fighter.isDead ? 0 : fighter.baseCost + equipmentHelper.getWeaponsCost(fighter.weapons) + equipmentHelper.getWargearsCost(getWargear(fighter)),
    getWeaponProfiles: (fighter) => equipmentHelper.getWeaponsProfile(fighter.weapons),
    getSkillsDisplayText: (fighter) => fighter.skills.join(", "),
    getWargearDisplayText: (fighter) => equipmentHelper.getWargearsDisplayText(getWargear(fighter)),
    getRulesDisplayText: (fighter) => fighter.rules?.join(", "),
    getAllRules: (fighter) => fighter.skills.concat(fighter.rules).concat(equipmentHelper.getWeaponsTraits(fighter.weapons)),
}

const getRating = (gang) => gang.fighters.reduce((previous, current) => previous + fighterHelper.getCost(current), 0);
const getStashCost = (gang) => gang.stash.credits + equipmentHelper.getWeaponsCost(gang.stash.weapons) + equipmentHelper.getWargearsCost(gang.stash.wargear);
const getWealth = (gang) => getRating(gang) + getStashCost(gang);

export const gangHelper = {
    getHouseDisplayText: (gang) => `${gang.house}${gang.affiliation ? ` (${gang.affiliation})` : ''}`,

    getRatingDisplayText: (gang) => { 
        let rating = getRating(gang);
        return !isNaN(rating) ? rating : "";
    },

    getWealthDisplayText: (gang) => { 
        let wealth = getWealth(gang);
        return !isNaN(wealth) ? wealth : "";
    },

    getStashWeaponsDisplayText: (gang) => equipmentHelper.getWeaponsDisplayText(gang.stash.weapons),
    getStashWargearDisplayText: (gang) => equipmentHelper.getWargearsDisplayText(gang.stash.wargear),
    getRulesData: (gang) => {
        let allRules = gang.fighters.reduce((previous, current) => previous.concat(fighterHelper.getAllRules(current)), []);
        let distinctRules = [...new Set(allRules)];
        let rulesData = distinctRules.reduce((previous, current) => {
            let rule = Rules[current];
            if (rule) {
                previous.push({ name: current, text: rule });
            }
            return previous;
        }, []);
        return rulesData;
    }
};