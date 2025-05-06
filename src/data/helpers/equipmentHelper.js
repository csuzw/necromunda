import { weapons as Weapons, wargear as Wargear } from '../equipment';

const getWargearCost = function(wargear, weaponCost = 0, allWargear = Wargear) {

    switch (typeof wargear) {
        case 'string':
            let wargearData = allWargear[wargear];
            if (!wargearData) return NaN;
            if (wargearData.cost !== "*") return wargearData.cost;
            return Math.ceil((weaponCost * 0.25) / 5) * 5;
        default:
            return NaN;
    }
};

const getWeaponCost = function(weapon, allWeapons = Weapons, allWargear = Wargear) {

    switch (typeof weapon) {
        case 'string':
            let weaponDataS = allWeapons[weapon];
            return weaponDataS ? weaponDataS.cost : NaN;
        case 'object': 
            let weaponDataO = allWeapons[weapon.name];
            if (!weaponDataO) return NaN;
            let ammoCost = weapon.ammo.reduce((previous, current) => previous + getWeaponCost(current, weaponDataO.ammo, allWargear), 0);
            let wargearCost = weapon.wargear.reduce((previous, current) => previous + getWargearCost(current, weaponDataO.cost, allWargear), 0);
            return weaponDataO.cost + ammoCost + wargearCost;
        default:
            return NaN;
    }
};

const getWeaponDisplayText = function(weapon) {

    switch (typeof weapon) {
        case 'string':
            return weapon;
        case 'object': 
            return `${weapon.name} (${weapon.ammo.concat(weapon.wargear).join(', ')})`;
        default:
            return "";
    }        
};

const getWeaponProfile = function(weapon, allWeapons = Weapons) {

    switch (typeof weapon) {
        case 'string':
            let weaponDataS = allWeapons[weapon];
            if (!weaponDataS?.profile) return [];
            return weaponDataS.profile;
        case 'object':
            let weaponDataO = allWeapons[weapon.name];
            if (!weaponDataO?.profile) return [];
            let ammoProfiles = weapon.ammo.reduce((previous, current) => previous.concat(getWeaponProfile(current, weaponDataO.ammo)), []);
            return weaponDataO.profile.concat(ammoProfiles);        
        default:
            return [];
    }
}

const getWargearDisplayText = function(wargear) {

    switch (typeof wargear) {
        case 'string':
            return wargear;
        default:
            return "";
    }        
};

const equipmentHelper = {
    getWeaponsCost: (weapons) => weapons.reduce((previous, current) => previous + getWeaponCost(current), 0),
    getWeaponsDisplayText: (weapons) => weapons.map(weapon => getWeaponDisplayText(weapon)).join(', '),
    getWeaponsProfile: (weapons) => weapons.flatMap(weapon => getWeaponProfile(weapon)),
    getWeaponsTraits: (weapons) => weapons.flatMap(weapon => getWeaponProfile(weapon).flatMap(profile => profile.traits)),

    getWargearsCost: (wargear) => wargear.reduce((previous, current) => previous + getWargearCost(current), 0),
    getWargearsDisplayText: (wargear) => wargear.map(item => getWargearDisplayText(item)).join(', '),
}


export default equipmentHelper;