// @flow

/* eslint-disable no-use-before-define */
const combatShotgunAmmo: AmmoMap = {
    "Firestorm ammo": { cost: 30, rarity: "rare", rarityLevel: 8 }
}

const sawnOffShotgunAmmo: AmmoMap = {
    "Solid ammo": { 
        cost: 5, rarity: "common",
        profile: [
            {  name: "- with solid ammo", range: { short: '4"', long: '8"' }, accuracy: { short: "-", long: "-2" }, strength: "4", armourPenetration: "-", damage: "2", ammo: "6+", traits: [ "Knockback", "Plentiful" ] }
        ],
    }
}

const shotgunAmmo: AmmoMap = {
    "Executioner ammo": { cost: 20, rarity: "rare", rarityLevel: 9 },
    "Inferno ammo": { cost: 15, rarity: "rare", rarityLevel: 8 }
}

const stubgunAmmo: AmmoMap = {
    "Dumdum rounds": { cost: 5, rarity: "rare", rarityLevel: 7 },
}

const grenadeLauncherAmmo: AmmoMap = {
}

export const weapons: WeaponMap = {
    // BASIC
    "Autogun": { 
        cost: 15, rarity: "common", type: "ranged", subType: "basic", 
        profile: [ 
            { name: "Autogun", range: { short: '8"', long: '24"' }, accuracy: { short: "+1", long: "-" }, strength: "3", armourPenetration: "-", damage: "1", ammo: "4+", traits: [ "Rapid Fire (1)" ] } 
        ] 
     },
    "Reclaimed autogun": { 
        cost: 10, rarity: "common", type: "ranged", subType: "basic", 
        profile: [ 
            { name: "Reclaimed autogun", range: { short: '8"', long: '24"' }, accuracy: { short: "+1", long: "-" }, strength: "3", armourPenetration: "-", damage: "1", ammo: "5+", traits: [ "Rapid Fire (1)" ] } 
        ]  
    },
    "Boltgun": { cost: 55, rarity: "rare", rarityLevel: 8, type: "ranged", subType: "basic" },
    "Cawdor polearm/autogun": { 
        cost: 20, rarity: "cawdor", type: "ranged", subType: "basic",
        profile: [
            { name: "Cawdor polearm with autogun" },
            {  name: "Polearm", range: { short: 'E', long: '2"' }, accuracy: { short: "-1", long: "-" }, strength: "S+1", armourPenetration: "-", damage: "1", ammo: "-", traits: [ "Melee", "Unwieldy", "Versatile" ] },
            {  name: "Autogun", range: { short: '8"', long: '24"' }, accuracy: { short: "+1", long: "-" }, strength: "3", armourPenetration: "-", damage: "1", ammo: "5+", traits: [ "Rapid Fire (1)" ] },
        ]  
    },
    "Cawdor polearm/blunderbuss with grape & purgation shot": { 
        cost: 40, rarity: "cawdor", type: "ranged", subType: "basic",
        profile: [
            { name: "Cawdor polearm with blunderbuss" },
            {  name: "Polearm", range: { short: 'E', long: '2"' }, accuracy: { short: "-1", long: "-" }, strength: "S+1", armourPenetration: "-", damage: "1", ammo: "-", traits: [ "Melee", "Unwieldy", "Versatile" ] },
            {  name: "Blunderbuss" },
            {  name: "- with grape shot", range: { short: '-', long: 'T' }, accuracy: { short: "-", long: "-" }, strength: "2", armourPenetration: "-", damage: "1", ammo: "6+", traits: [ "Plentiful", "Scattershot" ] },
            {  name: "- with purgation shot", range: { short: "-", long: "T" }, accuracy: { short: "-", long: "-" }, strength: "3", armourPenetration: "-", damage: "1", ammo: "6+", traits: [ "Blaze", "Scarce" ] },
        ] 
    },
    "Combat shotgun with salvo & shredder ammo": { 
        cost: 70, rarity: "rare", rarityLevel: 7, type: "ranged", subType: "basic", ammo: combatShotgunAmmo,
        profile: [
            { name: "Combat shotgun" },
            {  name: "- with salvo ammo", range: { short: '4"', long: '12"' }, accuracy: { short: "+1", long: "-" }, strength: "4", armourPenetration: "-", damage: "2", ammo: "4+", traits: [ "Knockback", "Rapid Fire (1)" ] },
            {  name: "- with shredder ammo", range: { short: "-", long: "T" }, accuracy: { short: "-", long: "-" }, strength: "2", armourPenetration: "-", damage: "1", ammo: "4+", traits: [ "Scattershot", "Template" ] },
        ] 
    },
    "Lasgun": { 
        cost: 15, rarity: "common", type: "ranged", subType: "basic", 
        profile: [ 
            { name: "Lasgun", range: { short: '18"', long: '24"' }, accuracy: { short: "+1", long: "-" }, strength: "3", armourPenetration: "-", damage: "1", ammo: "4+", traits: [ "Rapid Fire (1)" ] } 
        ] 
     },
    "Sawn-off shotgun with scatter ammo": { 
        cost: 15, rarity: "common", type: "ranged", subType: "basic", ammo: sawnOffShotgunAmmo,
        profile: [
            { name: "Sawn-off shotgun" },
            {  name: "- with scatter ammo", range: { short: '4"', long: '8"' }, accuracy: { short: "+2", long: "-" }, strength: "3", armourPenetration: "-", damage: "1", ammo: "4+", traits: [ "Plentiful", "Scattershot" ] },
        ] 
    },
    "Shotgun with solid & scatter ammo": { cost: 30, rarity: "common", type: "ranged", subType: "basic", ammo: shotgunAmmo },
    "Throwing knives": { 
        cost: 10, rarity: "common", type: "ranged", subType: "basic", 
        profile: [ 
            { name: "Throwing knives", range: { short: "Sx2", long: "Sx4" }, accuracy: { short: "-", long: "-1" }, strength: "-", armourPenetration: "-1", damage: "-", ammo: "5+", traits: [ "Scarce", "Silent", "Toxin" ] } 
        ] 
    },  
    // PISTOLS
    "Autopistol": { 
        cost: 10, rarity: "common", type: "ranged", subType: "pistol", 
        profile: [ 
            { name: "Autopistol", range: { short: '4"', long: '12"' }, accuracy: { short: "+1", long: "-" }, strength: "3", armourPenetration: "-", damage: "1", ammo: "4+", traits: [ "Rapid Fire (1)", "Sidearm" ] } 
        ]  
    },   
    "Reclaimed autopistol": { 
        cost: 5, rarity: "common", type: "ranged", subType: "pistol" , 
        profile: [ 
            { name: "Reclaimed autopistol", range: { short: '4"', long: '12"' }, accuracy: { short: "+1", long: "-" }, strength: "3", armourPenetration: "-", damage: "1", ammo: "5+", traits: [ "Rapid Fire (1)", "Sidearm" ] } 
        ] 
    },
    "Hand flamer": { cost: 75, rarity: "rare", rarityLevel: 8, type: "ranged", subType: "pistol" },
    "Laspistol": { 
        cost: 10, rarity: "common", type: "ranged", subType: "pistol", 
        profile: [ 
            { name: "Laspistol", range: { short: '8"', long: '12"' }, accuracy: { short: "+1", long: "-" }, strength: "3", armourPenetration: "-", damage: "1", ammo: "2+", traits: [ "Plentiful", "Sidearm" ] } 
        ]  
    },
    "Stub gun": { 
        cost: 5, rarity: "common", type: "ranged", subType: "pistol", ammo: stubgunAmmo, 
        profile: [ 
            { name: "Stub gun", range: { short: '6"', long: '12"' }, accuracy: { short: "+2", long: "-" }, strength: "3", armourPenetration: "-", damage: "1", ammo: "4+", traits: [ "Plentiful", "Sidearm" ] } 
        ]  
    },
    // SPECIAL
    "Grenade launcher with frag & krak grenades": { 
        cost: 65, rarity: "rare", rarityLevel: 8, type: "ranged", subType: "special", ammo: grenadeLauncherAmmo,
        profile: [
            { name: "Grenade launcher" },
            {  name: "- with frag grenade", range: { short: '6"', long: '24"' }, accuracy: { short: "-1", long: "-" }, strength: "3", armourPenetration: "-", damage: "1", ammo: "6+", traits: [ 'Blast (3")', "Knockback" ] },
            {  name: "- with krak grenade", range: { short: '6"', long: '24"' }, accuracy: { short: "-1", long: "-" }, strength: "6", armourPenetration: "-2", damage: "2", ammo: "6+", traits: [] },
        ] 
    },
    "Long rifle": { 
        cost: 30, rarity: "rare", rarityLevel: 7, type: "ranged", subType: "special", 
        profile: [ 
            { name: "Long rifle", range: { short: '24"', long: '48"' }, accuracy: { short: "-", long: "+1" }, strength: "4", armourPenetration: "-1", damage: "1", ammo: "4+", traits: [ "Knockback" ] } 
        ]  
    },
    // CLOSE COMBAT
    "Fighting knife": { 
        cost: 15, rarity: "common", type: "melee", subType: "knives", 
        profile: [ 
            { name: "Fighting knife", range: { short: "-", long: "E" }, accuracy: { short: "-", long: "-" }, strength: "S", armourPenetration: "-1", damage: "1", ammo: "-", traits: [ "Backstab", "Melee" ] } 
        ]  
    },
    "Stiletto knife": { cost: 20, rarity: "rare", rarityLevel: 9, type: "melee", subType: "knives" },
    "Axe": { 
        cost: 10, rarity: "common", type: "melee", subType: "mundane", 
        profile: [ 
            { name: "Axe", range: { short: "-", long: "E" }, accuracy: { short: "-", long: "-" }, strength: "S+1", armourPenetration: "-", damage: "1", ammo: "-", traits: [ "Disarm", "Melee" ] } 
        ]  
    },
    "Chainaxe": { 
        cost: 30, rarity: "rare", rarityLevel: 9, type: "melee", subType: "mundane", 
        profile: [ 
            { name: "Chainaxe", range: { short: "-", long: "E" }, accuracy: { short: "-", long: "+1" }, strength: "S+1", armourPenetration: "-1", damage: "1", ammo: "-", traits: [ "Disarm", "Melee", "Parry", "Rending" ] } 
        ]  
    },
    "Flail": { cost: 20, rarity: "common", type: "melee", subType: "mundane" },
    "Chain-glaive": { cost: 60, rarity: "rare", rarityLevel: 7, type: "melee", subType: "twoHanded" },
    "Greatsword": { cost: 40, rarity: "rare", rarityLevel: 10, type: "melee", subType: "twoHanded" },
    "Beak & talons (Sheen Bird)": { 
        cost: 0, rarity: "cawdor", type: "melee", subType: "sheenBird", 
        profile: [ 
            { name: "Beak & talons", range: { short: "-", long: "E" }, accuracy: { short: "-", long: "-" }, strength: "S", armourPenetration: "-1", damage: "2", ammo: "-", traits: [ "Melee", "Rending" ] } 
        ]  
    },
    // GRENADES
    "Blasting charges": { cost: 35, rarity: "rare", rarityLevel: 8, type: "grenades" },
    "Frag grenades": { 
        cost: 30, rarity: "common", type: "grenades", 
        profile: [ 
            { name: "Frag grenades", range: { short: "-", long: "Sx3" }, accuracy: { short: "-", long: "-" }, strength: "3", armourPenetration: "-", damage: "1", ammo: "4+", traits: [ 'Blast (3")', "Grenade", "Knockback" ] } 
        ]
     },
    "Incendiary charges": { cost: 40, rarity: "rare", rarityLevel: 7, type: "grenades" },
    "Krak grenades": { cost: 45, rarity: "rare", rarityLevel: 8, type: "grenades" },
    "Smoke grenades": { 
        cost: 15, rarity: "common", type: "grenades", 
        profile: [ 
            { name: "Smoke grenade", range: { short: "-", long: "Sx3" }, accuracy: { short: "-", long: "-" }, strength: "-", armourPenetration: "-", damage: "-", ammo: "4+", traits: [ 'Blast (*)', "Grenade", "Smoke" ] } 
        ] 
    },
}

export const wargear: WargearMap = {  
    // ARMOUR
    "Light carapace armour": { cost: 80, rarity: "rare", rarityLevel: 10, type: "armour" },
    "Heavy carapace armour": { cost: 100, rarity: "rare", rarityLevel: 11, type: "armour" },
    "Flak armour": { cost: 10, rarity: "common", type: "armour" },
    "Gutterforged cloak": { cost: 15, rarity: "cawdor", type: "armour" },
    "Hazard suit": { cost: 10, rarity: "rare", rarityLevel: 10, type: "armour" },
    "Mesh armour": { cost: 15, rarity: "common", type: "armour" },
    // FIELD ARMOUR
    // PERSONAL EQUIPMENT
    "Amoured undersuit": { cost: 25, rarity: "rare", rarityLevel: 7, type: "personalEquipment" },
    "Bomb delivery rats": { cost: 30, rarity: "cawdor", type: "personalEquipment" },
    "Cult icon": { cost: 40, rarity: "cawdor", type: "personalEquipment" },
    "Skinblade": { cost: 10, rarity: "common", type: "personalEquipment" },
    // WEAPON ACCESSORIES
    "Infra-sight": { cost: 40, rarity: "rare", rarityLevel: 8, type: "weaponAccessories" },
    "Mono-sight": { cost: 35, rarity: "rare", rarityLevel: 9, type: "weaponAccessories" },
    "Telescopic-sight": { cost: 25, rarity: "common", type: "weaponAccessories" },
    // STATUS ITEMS
    "Sheen bird": { cost: 90, rarity: "cawdor", type: "statusItems", subType: "exoticBeasts" },
    "Exotic furs": { cost: 50, rarity: "rare", rarityLevel: 12, type: "statusItems", subType: "extravagantGoods" },
    "Gold-plated gun": { cost: 40, rarity: "rare", rarityLevel: 10, type: "statusItems", subType: "extravagantGoods" },
    "Master-crafted weapon": { cost: "*", rarity: "rare", rarityLevel: 10, type: "statusItems", subType: "extravagantGoods" },
    "Opulent jewellery": { cost: 80, rarity: "rare", rarityLevel: 11, type: "statusItems", subType: "extravagantGoods" },
    "Uphive raiments": { cost: 50, rarity: "rare", rarityLevel: 10, type: "statusItems", subType: "extravagantGoods" },
}

export const rules: RulesMap = {
    // SKILLS
    "Marksman": "The fighter is not affected by the rules for Target Priority.  In addition, if the hit roll for an attack made by the fighter with a ranged weapon (that does not have the Blast Trait) is a natural 6, they score a critical hit and the weapon's Damage is doubled (if they are firing a weapon with the Rapid Fire trait, only the Damage of the first hit is doubled).",
    "Overwatch": "If this fighter is Standing and Active, and has a Ready marker on them, they can interrupt a visible enemy fighter's action as soon as it is declared but before it is carried out.  This fighter loses their Ready marker then immediately makes a Shoot (Basic) action targeting the enemy fighter whose action they have interrupted.  If the enemy is Pinned or Seriously Injured as a result, their activation ends immediately and their action(s) are not made.",
    // PSYKER
    "Visions (Divination)": "While this Wyrd Power is maintained, all enemy fighters within 18\" of this fighter that are in full cover count as being in partial cover, and all enemy fighters with 18\" of this fighter that are in partial cover count as being in the open.",
    // SPECIAL RULES,
    "Future Sight": "Once per battle, this fighter may use this ability to re-roll any dice roll made during their activation.  This ability may be used to re-roll any number of dice and may even be used on a roll made by an enemy fighter.",
    "Flight": "A Sheen Bird ignores all terrain, may move freely between levels without restriction, and can never fall. It may not, however, ignore impassable terrain and may not end its movement with its base overlapping an obstacle or another fighter's base.",
    "Bate": "When the owning fighter activates, the Sheen Bird will attempt to charge an enemy fighter even if the owning fighter does not wish it to. Make a Willpower check for the owning fighter, if this check is failed, the Sheen Bird must perform a Charge (Double) action, during which it must move towards the closest enemy fighter. If the check is passed, the Sheen Bird activates as normal.",
    "Rake Away": "At the end of the Sheen Bird's activation, if the owner is Standing and Active or Prone and Pinned, they may choose to make a Willpower check. If this check is passed, the Sheen Bird will immediately make a free Move (Simple) action, or Retreat (Basic) action if Engaged, directly towards the owner. If the check is failed, the Sheen Bird does not make this free action and stays where it is.",
}
/* eslint-enable no-use-before-define */

/* TYPES */
type RulesMap = {|
    [string]: string
|}

type Profile = {|
    name: string,
    range: {|
        short: string,
        long: string
    |},
    accuracy: {|
        short: string,
        long: string
    |},
    strength: string,
    armourPenetration: string,
    damage: string,
    ammo: string,
    traits: Array<string>
|} | {|
    name: string
|}

type Ammo = {|
    cost: number,
    rarity?: string,
    rarityLevel?: number,
    profile?: Array<Profile>
|}

type AmmoMap = {|
    [string]: Ammo
|}

type Weapon = {|
    cost: number,
    rarity?: string,
    rarityLevel?: number,
    type?: string,
    subType?: string,
    ammo?: AmmoMap,
    profile?: Array<Profile>
|}

type Wargear = {|
    cost: number | "*",
    rarity?: string,
    rarityLevel?: number,
    type?: string,
    subType?: string
|}

type WeaponMap = {|
    [string]: Weapon
|}

type WargearMap = {|
    [string]: Wargear
|}