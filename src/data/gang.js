export const gang = {
    name: process.env.REACT_APP_GANG_NAME,
    house: "Underhive Outcasts",
    affiliation: "Cawdor",
    reputation: 1,
    territories: [],
    stash: {
        credits: 0,
        weapons: [],
        wargear: []
    },
    fighters: [
        {
            name: "Mother Excubita",
            nickname: "The Shrike",
            type: "Leader",
            archetype: "Wyrd",
            cost: 125,
            experience: 0,
            advancements: 0,
            inRecovery: false,
            capturedBy: "",
            lastingInjuries: "",
            characteristics: {
                movement: { base: 5, modifier: 0 },
                weaponSkill: { base: 2, modifier: 0 },
                ballisticSkill: { base: 4, modifier: 0 },
                strength: { base: 4, modifier: 0 },
                toughness: { base: 3, modifier: 0 },
                wounds: { base: 2, modifier: 0 },
                initiative: { base: 4, modifier: 0 },
                attacks: { base: 3, modifier: 0 },
                leadership: { base: 6, modifier: 0 },
                cool: { base: 6, modifier: 0 },
                willpower: { base: 4, modifier: 0 },
                intelligence: { base: 7, modifier: 0 },
            },
            weapons: [ "Chainaxe", "Reclaimed autopistol" ],
            skills: [ "Visions (Divination)" ],
            wargear: [ "Mesh armour", "Skinblade" ],
            rules: [ "Gang Hierarchy (Leader)", "Tools of the Trade", "Group Activation (2)", "Future Sight" ],
        },
        {
            name: "Brother Mask",
            type: "Champion",
            archetype: "Gunslinger",
            cost: 60,
            experience: 0,
            advancements: 0,
            inRecovery: false,
            capturedBy: "",
            lastingInjuries: "",
            characteristics: {
                movement: { base: 5, modifier: 0 },
                weaponSkill: { base: 3, modifier: 0 },
                ballisticSkill: { base: 4, modifier: 0 },
                strength: { base: 3, modifier: 0 },
                toughness: { base: 3, modifier: 0 },
                wounds: { base: 2, modifier: 0 },
                initiative: { base: 4, modifier: 0 },
                attacks: { base: 1, modifier: 0 },
                leadership: { base: 6, modifier: 0 },
                cool: { base: 7, modifier: 0 },
                willpower: { base: 8, modifier: 0 },
                intelligence: { base: 8, modifier: 0 },
            },
            weapons: [ { name: "Long rifle", wargear: [ "Infra-sight" ], ammo: [] } ],
            skills: [ "Marksman" ],
            wargear: [ "Mesh armour" ],
            rules: [ "Gang Hierarchy (Champion)", "Tools of the Trade", "Group Activation (1)" ],
        },
        {
            name: "Brother Ludovic",
            type: "Champion",
            archetype: "Mastermind",
            cost: 60,
            experience: 0,
            advancements: 0,
            inRecovery: false,
            capturedBy: "",
            lastingInjuries: "",
            characteristics: {
                movement: { base: 5, modifier: 0 },
                weaponSkill: { base: 3, modifier: 0 },
                ballisticSkill: { base: 4, modifier: 0 },
                strength: { base: 3, modifier: 0 },
                toughness: { base: 3, modifier: 0 },
                wounds: { base: 2, modifier: 0 },
                initiative: { base: 4, modifier: 0 },
                attacks: { base: 1, modifier: 0 },
                leadership: { base: 6, modifier: 0 },
                cool: { base: 7, modifier: 0 },
                willpower: { base: 8, modifier: 0 },
                intelligence: { base: 8, modifier: 0 },
            },
            weapons: [ "Grenade launcher with frag & krak grenades", "Reclaimed autopistol" ],
            skills: [ "Overwatch" ],
            wargear: [ "Mesh armour" ],
            rules: [ "Gang Hierarchy (Champion)", "Tools of the Trade", "Group Activation (1)" ],
        },
        {
            name: "Sister Isabelline",
            type: "Ganger",
            cost: 30,
            experience: 0,
            advancements: 0,
            inRecovery: false,
            capturedBy: "",
            lastingInjuries: "",
            characteristics: {
                movement: { base: 5, modifier: 0 },
                weaponSkill: { base: 4, modifier: 0 },
                ballisticSkill: { base: 4, modifier: 0 },
                strength: { base: 3, modifier: 0 },
                toughness: { base: 3, modifier: 0 },
                wounds: { base: 1, modifier: 0 },
                initiative: { base: 4, modifier: 0 },
                attacks: { base: 1, modifier: 0 },
                leadership: { base: 8, modifier: 0 },
                cool: { base: 8, modifier: 0 },
                willpower: { base: 8, modifier: 0 },
                intelligence: { base: 8, modifier: 0 },
            },
            weapons: [ "Cawdor polearm/blunderbuss with grape & purgation shot" ],
            skills: [],
            wargear: [ "Flak armour" ],
            rules: [ "Gang Fighter (Ganger)" ],
        },
        {
            name: "Sister Dorsa",
            type: "Ganger",
            cost: 30,
            experience: 0,
            advancements: 0,
            inRecovery: false,
            capturedBy: "",
            lastingInjuries: "",
            characteristics: {
                movement: { base: 5, modifier: 0 },
                weaponSkill: { base: 4, modifier: 0 },
                ballisticSkill: { base: 4, modifier: 0 },
                strength: { base: 3, modifier: 0 },
                toughness: { base: 3, modifier: 0 },
                wounds: { base: 1, modifier: 0 },
                initiative: { base: 4, modifier: 0 },
                attacks: { base: 1, modifier: 0 },
                leadership: { base: 8, modifier: 0 },
                cool: { base: 8, modifier: 0 },
                willpower: { base: 8, modifier: 0 },
                intelligence: { base: 8, modifier: 0 },
            },
            weapons: [ "Cawdor polearm/autogun" ],
            skills: [],
            wargear: [ "Flak armour" ],
            rules: [ "Gang Fighter (Ganger)" ],
        },
        {
            name: "Brother Coll",
            type: "Ganger",
            cost: 30,
            experience: 0,
            advancements: 0,
            inRecovery: false,
            capturedBy: "",
            lastingInjuries: "",
            characteristics: {
                movement: { base: 5, modifier: 0 },
                weaponSkill: { base: 4, modifier: 0 },
                ballisticSkill: { base: 4, modifier: 0 },
                strength: { base: 3, modifier: 0 },
                toughness: { base: 3, modifier: 0 },
                wounds: { base: 1, modifier: 0 },
                initiative: { base: 4, modifier: 0 },
                attacks: { base: 1, modifier: 0 },
                leadership: { base: 8, modifier: 0 },
                cool: { base: 8, modifier: 0 },
                willpower: { base: 8, modifier: 0 },
                intelligence: { base: 8, modifier: 0 },
            },
            weapons: [ "Sawn-off shotgun with scatter ammo", "Frag grenades" ],
            skills: [],
            wargear: [ "Flak armour" ],
            rules: [ "Gang Fighter (Ganger)" ],
        },
        {
            name: "Brother Schach",
            type: "Ganger",
            cost: 30,
            experience: 0,
            advancements: 0,
            inRecovery: false,
            capturedBy: "",
            lastingInjuries: "",
            characteristics: {
                movement: { base: 5, modifier: 0 },
                weaponSkill: { base: 4, modifier: 0 },
                ballisticSkill: { base: 4, modifier: 0 },
                strength: { base: 3, modifier: 0 },
                toughness: { base: 3, modifier: 0 },
                wounds: { base: 1, modifier: 0 },
                initiative: { base: 4, modifier: 0 },
                attacks: { base: 1, modifier: 0 },
                leadership: { base: 8, modifier: 0 },
                cool: { base: 8, modifier: 0 },
                willpower: { base: 8, modifier: 0 },
                intelligence: { base: 8, modifier: 0 },
            },
            weapons: [ "Autogun", "Axe" ],
            skills: [],
            wargear: [ "Flak armour" ],
            rules: [ "Gang Fighter (Ganger)" ],
        },
        {
            name: "Sister Tigrin",
            type: "Ganger",
            cost: 30,
            experience: 0,
            advancements: 0,
            inRecovery: false,
            capturedBy: "",
            lastingInjuries: "",
            characteristics: {
                movement: { base: 5, modifier: 0 },
                weaponSkill: { base: 4, modifier: 0 },
                ballisticSkill: { base: 4, modifier: 0 },
                strength: { base: 3, modifier: 0 },
                toughness: { base: 3, modifier: 0 },
                wounds: { base: 1, modifier: 0 },
                initiative: { base: 4, modifier: 0 },
                attacks: { base: 1, modifier: 0 },
                leadership: { base: 8, modifier: 0 },
                cool: { base: 8, modifier: 0 },
                willpower: { base: 8, modifier: 0 },
                intelligence: { base: 8, modifier: 0 },
            },
            weapons: [ "Lasgun", "Stub gun" ],
            skills: [],
            wargear: [ "Flak armour" ],
            rules: [ "Gang Fighter (Ganger)" ],
        },
        {
            name: "Brother Newton",
            type: "Ganger",
            cost: 30,
            experience: 0,
            advancements: 0,
            inRecovery: false,
            capturedBy: "",
            lastingInjuries: "",
            characteristics: {
                movement: { base: 5, modifier: 0 },
                weaponSkill: { base: 4, modifier: 0 },
                ballisticSkill: { base: 4, modifier: 0 },
                strength: { base: 3, modifier: 0 },
                toughness: { base: 3, modifier: 0 },
                wounds: { base: 1, modifier: 0 },
                initiative: { base: 4, modifier: 0 },
                attacks: { base: 1, modifier: 0 },
                leadership: { base: 8, modifier: 0 },
                cool: { base: 8, modifier: 0 },
                willpower: { base: 8, modifier: 0 },
                intelligence: { base: 8, modifier: 0 },
            },
            weapons: [ "Laspistol", "Autopistol" ],
            skills: [],
            wargear: [ "Flak armour" ],
            rules: [ "Gang Fighter (Ganger)" ],
        },
        {
            name: "Brother Gub",
            type: "Ganger",
            cost: 30,
            experience: 0,
            advancements: 0,
            inRecovery: false,
            capturedBy: "",
            lastingInjuries: "",
            characteristics: {
                movement: { base: 5, modifier: 0 },
                weaponSkill: { base: 4, modifier: 0 },
                ballisticSkill: { base: 4, modifier: 0 },
                strength: { base: 3, modifier: 0 },
                toughness: { base: 3, modifier: 0 },
                wounds: { base: 1, modifier: 0 },
                initiative: { base: 4, modifier: 0 },
                attacks: { base: 1, modifier: 0 },
                leadership: { base: 8, modifier: 0 },
                cool: { base: 8, modifier: 0 },
                willpower: { base: 8, modifier: 0 },
                intelligence: { base: 8, modifier: 0 },
            },
            weapons: [ "Stub gun", "Fighting knife", "Smoke grenades" ],
            skills: [],
            wargear: [ "Flak armour" ],
            rules: [ "Gang Fighter (Ganger)" ],
        },
    ]
};