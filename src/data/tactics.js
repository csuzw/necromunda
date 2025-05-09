// @flow

/* eslint-disable no-use-before-define */
export const deck: Deck = [
    {
        name: "Auto-Healer",
        type: "Van Saar",
        use: "Play this card at the start of any End phase.",
        text: "Choose one Seriously Injured fighter. Rather than rolling the Injury dice, you can choose to have the fighter suffer a Flesh Wound and become Pinned.",
        used: false,
    },
    {
        name: "Blood Cleansers",
        type: "Van Saar",
        use: "Play at the start of any turn.",
        text: "For the duration of the round, all friendly models count their Toughness as 1 higher when affected by weapons with the Toxin or Gas traits.",
        used: false,
    },
    {
        name: "Combat Drugs",
        type: "Universal",
        use: "Play this gang tactic when activating a friendly fighter.",
        text: "For the duration of the round, increase the fighter's Attacks characteristic by D3. However, should the roll be a natural 6, the fighter suffers a Flesh Wound at the end of their activation.",
        used: false,
    },
    {
        name: "Comm Burst",
        type: "Van Saar",
        use: "Play at the start of any turn.",
        text: "For this round, your gang's Leader can make Rally actions for Broken fighters anywhere on the board. In addition, the range of Leading by Example is increased to 18\" for Leaders and 12\" for Champions.",
        used: false,
    },
    {
        name: "Cortical Stimulants",
        type: "Van Saar",
        use: "Play at the start of the game, after deployment.",
        text: "One fighter in your gang automatically passes Intelligence checks for the duration of the battle.",
        used: false,
    },
    {
        name: "Enhanced Auspexes",
        type: "Van Saar",
        use: "Play instead of activating a fighter.",
        text: "For the remainder of the round, friendly fighters may fire through line of sight blocking terrain such as doors and barricades, but NOT through any impassable terrain. These shots suffer a -2 penalty to hit and the target's armour save is increased by 1.",
        used: false,
    },
    {
        name: "Experimental Rig",
        type: "Van Saar",
        use: "Play at the start of the game, after both sides have deployed.",
        text: "Choose a weapon possessed by a friendly fighter. For the duration of the game, this weapon increases its Long range by 6\" and its Strength by 1, but loses the Plentiful trait if it has it, and gains the Scarce trait if it doesn't have it.",
        used: false,
    },
    {
        name: "Fall Back",
        type: "Universal",
        use: "Play this card when activating a fighter.",
        text: "This fighter may immediately make a Retreat (Basic) action without having to make an Initiative check. Additionally, each enemy fighter that was Engaging them is unable to make any Reaction attacks.",
        used: false,
    },
    {
        name: "Hyper Auto-Loader",
        type: "Van Saar",
        use: "Play when a fighter makes a ranged attack.",
        text: "If the fighter is using a weapon with the Rapid Fire trait, they may roll 2 extra Firepower dice. After working out the effects of the shot, their ranged weapon automatically counts as having failed an Ammo check, regardless of the results of the Firepower dice.",
        used: false,
    },
    {
        name: "Medical Protocols",
        type: "Van Saar",
        use: "Play at the start of any End phase.",
        text: "For the duration of this End phase, when any fighter assists a friendly fighter's Recovery test, roll an extra Injury dice, then choose one to keep.",
        used: false,
    },
    {
        name: "Mesh Underlay",
        type: "Van Saar",
        use: "Play when a fighter is hit by a ranged attack.",
        text: "For the remainder of the battle, the chosen fighter's armour saves are not modified by AP when hit by a ranged attack.",
        used: false,
    },
    {
        name: "Nerves of Steel",
        type: "Universal",
        use: "Play when a fighter makes a ranged attack.",
        text: "The fighter may ignore normal Target Priority rules and may instead target any eligible enemy fighter they wish without having to pass a Cool check.",
        used: false,
    },
    {
        name: "Overcharge",
        type: "Van Saar",
        use: "Play when a fighter makes a ranged attack.",
        text: "For the duration of the fighter's activation, one of their Las or Plasma ranged weapons increases its Strength by 2.",
        used: true,
    },
    {
        name: "Pneumatic Injectors",
        type: "Van Saar",
        use: "Play when a fighter makes a Melee attack.",
        text: "For the duration of the fighter's activation, one of their Melee weapons increases its Strength by 2.",
        used: false,
    },
    {
        name: "Rapid Fire",
        type: "Universal",
        use: "Play this card when activating a fighter.",
        text: "This turn, the fighter may make two Fire (Basic) actions, provided they use the same weapon for both and make no other actions for any reason. However, at the end of the activation, the weapon counts as automatically having failed an Ammo check.",
        used: true,
    },
    {
        name: "Seize the Initiative",
        type: "Universal",
        use: "Play this card at the beginning of any round, before rolling for Priority.",
        text: "You immediately take Priority this turn without any dice being rolled.",
        used: false,
    },
    {
        name: "Sump Slump",
        type: "Universal",
        use: "Play at the start of any turn.",
        text: "Immediately remove D3 Barricades of your choice from anywhere on the board.",
        used: false,
    },
    {
        name: "Warforge",
        type: "Van Saar",
        use: "Play at the start of the game, after both sides have deployed.",
        text: "For the duration of this battle, all friendly models add a +1 modifier to any Ammo checks they are required to take.",
        used: false,
    },
]
/* eslint-enable no-use-before-define */

/* TYPES */
type Tactic = {|
    name: string,
    type: string,
    use: string,
    text: string,
    used: bool,
|}

type Deck = Array<Tactic>
