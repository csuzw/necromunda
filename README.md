# Servants of the Shrike

<https://csuzw.github.io/necromunda>

# Getting Started

* Install nodejs and visual studio code
* Create a github account
* Fork https://github.com/csuzw/necromunda
* Update `src/package.json`.`homepage` to `https://{your-github-username}.github.io/necromunda`
    * You could also change `name` variable to something other than `corvus-cabal` but I don't think this really affects anything meaningful for now
* Update `.env`.`REACT_APP_GANG_NAME` to the name of your gang
* Update fonts and colours by modifying `src/_variables.scss` 
    * Or modify style further by changing `src/App.scss` and `src/components/NavBar.module.scss`
* Update `src/data/gang.js` and `src/data/equipment.js` <- THIS BIT IS COMPLICATED!
* Test using `npm start`
* Deploy using `npm run deploy`

# TODO

* Define gang/data formats
* Image and nickname to fighter cards
* Add gang narrative to home page
* gang name ideas
    * Shrike, Abattoir, Watch, Butcher Birds, Laniidae, Lanius
    * Assemblage, Coterie, Set, Squad, Syndicate, Scryers, Disciples, Fraternity, Seers, Followers, Acolytes, Servants, Scavengers, Apostles, Sisterhood, Prophets
    * Nest, Roost, Cradle, Perch
    * Servants of the Shrike

