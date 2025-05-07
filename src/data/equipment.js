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
    "Dumdum rounds": { 
        cost: 5, rarity: "rare", rarityLevel: 7 ,
        profile: [
            {  name: "- with dumdum ammo", range: { short: '5"', long: '10"' }, accuracy: { short: "+1", long: "-" }, strength: "4", armourPenetration: "-", damage: "1", ammo: "4+", traits: [ "Limited" ] }
        ],
    },
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
        cost: 10, rarity: "common", type: "ranged", subType: "basic", 
        profile: [ 
            { name: "Lasgun", range: { short: '18"', long: '24"' }, accuracy: { short: "+1", long: "-" }, strength: "3", armourPenetration: "-", damage: "1", ammo: "4+", traits: [ "Plentiful" ] } 
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
    "Hand flamer": { 
        cost: 75, rarity: "rare", rarityLevel: 8, type: "ranged", subType: "pistol", 
        profile: [ 
            { name: "Hand flamer", range: { short: '-', long: 'T' }, accuracy: { short: "-", long: "-" }, strength: "3", armourPenetration: "-", damage: "1", ammo: "5+", traits: [ "Blaze", "Template" ] } 
        ] 
     },
    "Laspistol": { 
        cost: 5, rarity: "common", type: "ranged", subType: "pistol", 
        profile: [ 
            { name: "Laspistol", range: { short: '8"', long: '12"' }, accuracy: { short: "+1", long: "-" }, strength: "3", armourPenetration: "-", damage: "1", ammo: "2+", traits: [ "Plentiful", "Sidearm" ] } 
        ]  
    },
    "Las sub-carbine": { 
        cost: 15, rarity: "van saar", type: "ranged", subType: "pistol", 
        profile: [ 
            { name: "Las sub-carbine", range: { short: '4"', long: '12"' }, accuracy: { short: "+1", long: "-" }, strength: "3", armourPenetration: "-", damage: "1", ammo: "4+", traits: [ "Plentiful", "Rapid Fire (1)", "Sidearm" ] } 
        ]  
    },
    "Master-crafted las sub-carbine": { 
        cost: 20, rarity: "van saar", type: "ranged", subType: "pistol", 
        profile: [ 
            { name: "Master-crafted las sub-carbine", range: { short: '4"', long: '12"' }, accuracy: { short: "+1", long: "-" }, strength: "3", armourPenetration: "-", damage: "1", ammo: "4+", traits: [ "Plentiful", "Rapid Fire (1)", "Sidearm", "Master-crafted" ] } 
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
    "Rad beamer": { 
        cost: 70, rarity: "van saar", type: "ranged", subType: "special", 
        profile: [ 
            { name: "Rad beamer" },
            { name: "- focused beam", range: { short: '12"', long: '24"' }, accuracy: { short: "+2", long: "-" }, strength: "3", armourPenetration: "-2", damage: "1", ammo: "5+", traits: [ "Rad-phage" ] },
            { name: "- dispersed beam", range: { short: '12"', long: '24"' }, accuracy: { short: "-", long: "-" }, strength: "2", armourPenetration: "-2", damage: "1", ammo: "5+", traits: [ "Rad-phage", "Rapid Fire (1)" ] },
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
    "Chainsword": { 
        cost: 25, rarity: "rare", rarityLevel: 8, type: "melee", subType: "mundane", 
        profile: [ 
            { name: "Chainsword", range: { short: "-", long: "E" }, accuracy: { short: "-", long: "+1" }, strength: "S", armourPenetration: "-1", damage: "1", ammo: "-", traits: [ "Melee", "Parry", "Rending" ] } 
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
    "Venomous bite": { 
        cost: 0, rarity: "van saar", type: "melee", subType: "cyberachnid", 
        profile: [ 
            { name: "Venomous bite", range: { short: "-", long: "E" }, accuracy: { short: "-", long: "-" }, strength: "-", armourPenetration: "-", damage: "-", ammo: "-", traits: [ "Melee", "Toxin" ] } 
        ]  
    },
    "Web projector": { 
        cost: 0, rarity: "van saar", type: "ranged", subType: "cyberachnid", 
        profile: [ 
            { name: "Web projector", range: { short: "-", long: "T" }, accuracy: { short: "-", long: "-" }, strength: "2", armourPenetration: "-", damage: "-", ammo: "6+", traits: [ "Scarce", "Silent", "Template", "Web" ] } 
        ]  
    },
    "Spider-rig": { 
        cost: 80, rarity: "van saar", type: "ranged", subType: "cyberachnid", 
        profile: [ 
            { name: "Spider-rig", range: { short: "E", long: '3"' }, accuracy: { short: "+1", long: "+1" }, strength: "S+1", armourPenetration: "-1", damage: "1", ammo: "-", traits: [ "Entangle", "Melee", "Paired", "Parry", "Shock", "Versatile" ] } 
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
    "Stun grenades": { 
        cost: 30, rarity: "common", type: "grenades", 
        profile: [ 
            { name: "Stun grenades", range: { short: "-", long: "Sx3" }, accuracy: { short: "-", long: "-" }, strength: "2", armourPenetration: "-1", damage: "1", ammo: "4+", traits: [ 'Blast (3")', "Grenade", "Concussion" ] } 
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
    "Armoured bodyglove": { cost: 0, rarity: "van saar", type: "armour" },
    // FIELD ARMOUR
    // PERSONAL EQUIPMENT
    "Amoured undersuit": { cost: 25, rarity: "rare", rarityLevel: 7, type: "personalEquipment" },
    "Bomb delivery rats": { cost: 30, rarity: "cawdor", type: "personalEquipment" },
    "Cult icon": { cost: 40, rarity: "cawdor", type: "personalEquipment" },
    "Skinblade": { cost: 10, rarity: "common", type: "personalEquipment" },
    "Augurspex": { cost: 20, rarity: "van saar", type: "personalEquipment" },
    "Grav-cutter": { cost: 0, rarity: "van saar", type: "personalEquipment" },
    // WEAPON ACCESSORIES
    "Infra-sight": { cost: 40, rarity: "rare", rarityLevel: 8, type: "weaponAccessories" },
    "Mono-sight": { cost: 35, rarity: "rare", rarityLevel: 9, type: "weaponAccessories" },
    "Telescopic-sight": { cost: 25, rarity: "common", type: "weaponAccessories" },
    // STATUS ITEMS
    "Sheen bird": { cost: 90, rarity: "cawdor", type: "statusItems", subType: "exoticBeasts" },
    "Cyberachnid": { cost: 75, rarity: "cawdor", type: "statusItems", subType: "exoticBeasts" },
    "Exotic furs": { cost: 50, rarity: "rare", rarityLevel: 12, type: "statusItems", subType: "extravagantGoods" },
    "Gold-plated gun": { cost: 40, rarity: "rare", rarityLevel: 10, type: "statusItems", subType: "extravagantGoods" },
    "Master-crafted weapon": { cost: "*", rarity: "rare", rarityLevel: 10, type: "statusItems", subType: "extravagantGoods" },
    "Opulent jewellery": { cost: 80, rarity: "rare", rarityLevel: 11, type: "statusItems", subType: "extravagantGoods" },
    "Uphive raiments": { cost: 50, rarity: "rare", rarityLevel: 10, type: "statusItems", subType: "extravagantGoods" },
    // CYBER TEKNIKA
    "Occular Alpha (0)": { cost: 0, rarity: "van saar", type: "archaeoCyberteknika" },
    "Torsonic Gamma (15)": { cost: 15, rarity: "van saar", type: "archaeoCyberteknika" }
}

export const rules: RulesMap = {
    // SKILLS
    "Marksman": "The fighter is not affected by the rules for Target Priority.  In addition, if the hit roll for an attack made by the fighter with a ranged weapon (that does not have the Blast Trait) is a natural 6, they score a critical hit and the weapon's Damage is doubled (if they are firing a weapon with the Rapid Fire trait, only the Damage of the first hit is doubled).",
    "Overwatch": "If this fighter is Standing and Active, and has a Ready marker on them, they can interrupt a visible enemy fighter's action as soon as it is declared but before it is carried out.  This fighter loses their Ready marker then immediately makes a Shoot (Basic) action targeting the enemy fighter whose action they have interrupted.  If the enemy is Pinned or Seriously Injured as a result, their activation ends immediately and their action(s) are not made.",
    "Weaponsmith": "Any weapons this fighter is equipped with lose the Scarce trait if it has it. Any weapons this fighter is equipped with will gain the Plentiful trait if it does not have the Scarce trait. Weapons that already have the Plentiful trait gain no additional benefit from this skill.",
    "Fixer": "In the Receive Rewards step of the post-battle sequence, as long as this model is not Captured or In Recovery, their gang earns an additional D3x10 credits. Note that they do not need to have taken part in the battle to gain this bonus.",
    "Munitioneer": "Whenever an Ammo test is failed for this model, or another model from their gang within 6\", it can be re-rolled.",
    // PSYKER
    "Visions (Divination)": "While this Wyrd Power is maintained, all enemy fighters within 18\" of this fighter that are in full cover count as being in partial cover, and all enemy fighters with 18\" of this fighter that are in partial cover count as being in the open.",
    // SPECIAL RULES
    "Future Sight": "Once per battle, this fighter may use this ability to re-roll any dice roll made during their activation.  This ability may be used to re-roll any number of dice and may even be used on a roll made by an enemy fighter.",
    "Flight": "A Sheen Bird ignores all terrain, may move freely between levels without restriction, and can never fall. It may not, however, ignore impassable terrain and may not end its movement with its base overlapping an obstacle or another fighter's base.",
    "Bate": "When the owning fighter activates, the Sheen Bird will attempt to charge an enemy fighter even if the owning fighter does not wish it to. Make a Willpower check for the owning fighter, if this check is failed, the Sheen Bird must perform a Charge (Double) action, during which it must move towards the closest enemy fighter. If the check is passed, the Sheen Bird activates as normal.",
    "Rake Away": "At the end of the Sheen Bird's activation, if the owner is Standing and Active or Prone and Pinned, they may choose to make a Willpower check. If this check is passed, the Sheen Bird will immediately make a free Move (Simple) action, or Retreat (Basic) action if Engaged, directly towards the owner. If the check is failed, the Sheen Bird does not make this free action and stays where it is.",
    "Clamber": "When this fighter climbs, the vertical distance they move is not halved. In other words, they always count as climbing up or down a ladder.",
    "Fear Inducing": "Cyberachnids have the Fearsome (Ferocity) skill and may confer this onto their owner. The owner only gains this skill provided they have an Active Cyberachnid within 3\", otherwise the skill is lost.",
    "Fearsome (Ferocity)": "If an enemy makes a Charge action that targets this fighter, they must make a Willpower check before moving. If the check is failed, they cannot move and their activation ends immediately.",
    "Horrific": "A Cyberachnid is a horrifying meld of machine and spider that gangers of other Houses would just as soon not have in their hide-out. A Cyberachnid can never be Captured.",
    "Hot-headed": "Fighters with this special rule have much to prove and often act on impulse alone, hoping to impress their superiors. Consequently, older and wiser fighters expect them to be short-lived. Should a fighter with this special rule be Seriously Injured or be taken Out of Action, friendly fighters that are within 3\" do not have to take a Nerve test, unless they also have this special rule.",
    "Fast Learner": "During Campaign play, when this fighter gains a characteristic Advancement, they do not need to spend an additional 2 XP if the characteristic being improved has already been improved. In other words, this fighter may improve a characteristic any number of times (up to the maximum) for the basic XP cost shown each time.",
    "Master of Cyberteknika": "The cost of any Cyberteknika purchased for a Van Saar Archeotek is reduced by half, before rounding up to the nearest 5 credits.",
    "Techno-baubles": "If a gang has a Tech-merchant, it may reduce the Rare and/or Illegal value of any item in the Trading Post or the Black Market by 2, to a minimum of 7+. If this reduction would cause the Rare or Illegal value to fall below 7+, the item instead becomes Common.",
    "Friends in the Trade": "During every post-battle sequence, the cost of one item found in the Trading Post or Black Market may be reduced by D3x10 credits, to a minimum of 20 credits.",
    // WEAPONS
    "Plentiful" : "Ammunition for this weapon is incredibly common. When reloading it, no Ammo test is required - it is automatically reloaded.",
    "Sidearm" : "Weapons with this Trait can be used to make ranged attacks, and can also be used in close combat to make a single attack. Note that their Accuracy bonus only applies when making a ranged attack, not when used to make a close combat attack.",
    "Rad-phage" : "After fully resolving any successful hits a fighter suffers from a weapon with this Trait, roll an additional D6. On a 4+, the fighter will suffer an additional Flesh Wound.",
    "Rapid Fire (1)" : "When firing with a Rapid Fire weapon, a successful hit roll scores a number of hits equal to the number of bullet holes on the Firepower dice. In addition, the controlling player can roll more than one Firepower dice, up to the number shown in brackets (for example, when firing a Rapid Fire (2) weapon, up to two Firepower dice can be rolled). Make an Ammo test for each Ammo symbol that is rolled. If any of them fail, the gun runs Out of Ammo. If two or more of them fail, the gun has jammed and cannot be used for the rest of the battle.  If a Rapid Fire weapon scores more than one hit, the hits can be split between multiple targets. The first must be allocated to the original target, but the remainder can be allocated to other models within 3\" of the first who are also within range and line of sight. These must not be any harder to hit than the original target - if a target in the open is hit, an obscured target cannot have hits allocated to it. Allocate all of the hits before making any wound rolls.",
    "Toxin" : "Instead of making a wound roll for a Toxin attack, roll a D6. If the result is equal to or higher than the target's Toughness, or is a natural 6, make an Injury roll for them (regardless of their Wounds characteristic). If the roll is lower than the target's Toughness, they shrug off the toxin's effects. This attack has no effect on vehicles.",
    "Scarce" : "Ammunition is hard to come by for Scarce weapons, and as such they cannot be reloaded - once they run Out of Ammo, they cannot be used again during the battle.",
    "Silent" : "In scenarios that use the Sneak Attack special rules, there is no test to see whether the alarm is raised when this weapon is fired. Additionally, if using the Visibility (X\") rules, a model using this weapon that is Hidden does not become Revealed.",
    "Web" : "If the wound roll for a Web attack against a fighter is successful, no wound is inflicted, and no save roll or Injury roll is made. Instead, the target automatically becomes Webbed.",
    "Entangle" : "Hits scored by weapons with the Entangle trait cannot be negated by the Parry trait. In addition, if the hit roll for an Entangle weapon is a natural 6, any Reaction attacks made by the target have an additional -2 hit modifier.",
    "Paired" : "A fighter that is armed with Paired weapons counts as being armed with dual weapons with the Melee trait for the purposes of calculating the number of Attack dice they will roll. Additionally, when making a Charge (Double) action, their Attacks characteristic is doubled. Fighters subject to the Mounted condition gain no benefit from this Trait.",
    "Parry" : "After an enemy makes close combat attacks against a fighter armed with a Parry weapon, the fighter can force the attacking player to re-roll one successful hit. If the fighter is armed with two Parry weapons, they can force the attacking player to re-roll two successful hits instead.",
    "Shock" : "If the hit roll for a Shock weapon is a natural 6, the wound roll is considered to automatically succeed (no wound roll needs to be made).",
    "Versatile" : "The wielder of a Versatile weapon does not need to be in base contact with an enemy model in order to engage them in melee during their activation. They may engage and make close combat attacks against an enemy model during their activation, so long as the distance between their base and that of the enemy model is equal to or less than the distance shown for the Versatile weapon's Long range characteristic. For example, a fighter armed with a Versatile weapon with a Long range of 2\" may engage an enemy model that is up to 2\" away.  The enemy model is considered to be engaged, but may not in turn be Engaging the fighter armed with the Versatile weapon unless they too are armed with a Versatile weapon, and so may not be able to make Reaction attacks.  At all other times other than during this fighter's activation, Versatile has no effect.",
    "Template" : "Template weapons use the Flame template to determine how many targets they hit.",
    "Melee" : "This weapon can be used during close combat attacks.",
    "Master-crafted" : "Once per battle, re-roll a single failed hit roll.",
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