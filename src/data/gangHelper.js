import dataHelper from "./dataHelper";

const getWargear = (fighter) => {
    const weaponWargear = fighter.weapons.flatMap(weapon => weapon?.wargear ?? []);
    return fighter.wargear.concat(weaponWargear);
}

export const fighterHelper = {
    
    getCost: (fighter) => fighter.cost + dataHelper.getWeaponsCost(fighter.weapons) + dataHelper.getWargearsCost(getWargear(fighter)),
    getWeaponProfiles: (fighter) => dataHelper.getWeaponsProfile(fighter.weapons),
    getSkillsDisplayText: (fighter) => fighter.skills.join(", "),
    getWargearDisplayText: (fighter) => dataHelper.getWargearsDisplayText(getWargear(fighter)),
    getRulesDisplayText: (fighter) => fighter.rules?.join(", "),
}

const getRating = (gang) => gang.fighters.reduce((previous, current) => previous + fighterHelper.getCost(current), 0);
const getStashCost = (gang) => gang.stash.credits + dataHelper.getWeaponsCost(gang.stash.weapons) + dataHelper.getWargearsCost(gang.stash.wargear);
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

    getStashWeaponsDisplayText: (gang) => dataHelper.getWeaponsDisplayText(gang.stash.weapons),
    getStashWargearDisplayText: (gang) => dataHelper.getWargearsDisplayText(gang.stash.wargear),
};