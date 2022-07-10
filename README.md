# Necromunda

For Necromunda-y stuff!

Currently hosted at: <https://csuzw.github.io/necromunda>

# Getting Started

* Install [nodejs](https://nodejs.org/en/), [git](https://git-scm.com/), and [Visual Studio Code](https://code.visualstudio.com/)
* Install `Flow Language Support` extension for Visual Studio Code
* Create a [GitHub](https://github.com/) account
* Fork and clone https://github.com/csuzw/necromunda
* Run `npm install` and `npm run flow` (you may need to make a configuration change to get syntax highlighting working correctly for [flow type definitions](https://flow.org/en/docs/))
* Update `src/package.json`.`homepage` to `https://{your-github-username}.github.io/necromunda`
    * You could also change `name` variable to something other than `corvus-cabal` but I don't think this really affects anything meaningful for now
* Update `.env`.`REACT_APP_GANG_NAME` to the name of your gang
* Update fonts and colours by modifying `src/_variables.scss` 
    * Or modify style further by changing `src/App.scss` and `src/components/NavBar.module.scss`
* Update `src/data/gang.js` and `src/data/equipment.js`
    * [flow type definitions](https://flow.org/en/docs/) can be found at the end of these files.  If you have configured flow correctly, you should be warned of any errors you make when editing the objects in these files.
* Test using `npm start`
* Deploy using `npm run deploy`

# TODO

* Website
    * Add gang/fighter/campaign narrative sections

* Gang
    * Naming
        * Shrike, Abattoir, Watch, Butcher Birds, Laniidae, Lanius
        * Assemblage, Coterie, Set, Squad, Syndicate, Scryers, Disciples, Fraternity, Seers, Followers, Acolytes, Servants, Scavengers, Apostles, Sisterhood, Prophets
        * Nest, Roost, Cradle, Perch
        * Servants of the Shrike

