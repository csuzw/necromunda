import equipmentHelper from "./equipmentHelper";

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
};