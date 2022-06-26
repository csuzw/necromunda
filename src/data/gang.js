// @flow
const gangName = process.env.REACT_APP_GANG_NAME || "GANG NAME NOT SET";

/* eslint-disable no-use-before-define */
export const gang: Gang = {
    name: gangName,
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
            baseCost: 125,
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
            baseCost: 60,
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
            weapons: [ { name: "Long rifle", wargear: [ "Infra-sight" ], ammo: [] }, "Reclaimed autopistol" ],
            skills: [ "Marksman" ],
            wargear: [ "Mesh armour" ],
            rules: [ "Gang Hierarchy (Champion)", "Tools of the Trade", "Group Activation (1)" ],
        },
        {
            name: "Brother Ludovic",
            type: "Champion",
            archetype: "Mastermind",
            baseCost: 60,
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
            baseCost: 30,
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
            baseCost: 30,
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
            baseCost: 30,
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
            baseCost: 30,
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
            baseCost: 30,
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
            baseCost: 30,
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
            weapons: [ "Laspistol", "Stub gun" ],
            skills: [],
            wargear: [ "Flak armour" ],
            rules: [ "Gang Fighter (Ganger)" ],
        },
        {
            name: "Brother Gub",
            type: "Ganger",
            baseCost: 30,
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
/* eslint-enable no-use-before-define */

/* TYPES */
type Weapon = string | {|
    name: string,
    wargear: Array<string>,
    ammo: Array<string>
|}

type Characteristic = {|
    base: number,
    modifier: number
|}

type Characteristics = {|
    movement: Characteristic,
    weaponSkill: Characteristic,
    ballisticSkill: Characteristic,
    strength: Characteristic,
    toughness: Characteristic,
    wounds: Characteristic,
    initiative: Characteristic,
    attacks: Characteristic,
    leadership: Characteristic,
    cool: Characteristic,
    willpower: Characteristic,
    intelligence: Characteristic,
|}

type Fighter = {|
    name: string,
    nickname?: string,
    type: string,
    archetype?: string,
    baseCost: number,
    experience: number,
    advancements: number,
    inRecovery: boolean,
    capturedBy: string,
    lastingInjuries: string,
    characteristics: Characteristics,
    weapons: Array<Weapon>,
    wargear: Array<string>,
    skills: Array<string>,
    rules: Array<string>
|}

type Gang = {|
    name: string,
    house: string,
    affiliation?: string,
    reputation: number,
    territories: Array<string>,
    stash: {
        credits: number,
        weapons: Array<Weapon>,
        wargear: Array<string>
    },
    fighters: Array<Fighter>
|}