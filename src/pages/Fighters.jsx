import React from 'react';
import FighterCards from '../components/FighterCards.jsx';
import RuleCards from '../components/RuleCards.jsx';

import { gang } from '../data/gang.js';

export default function Fighters() {

    const chunkSize = 100;
    const chunkedFighters = gang.fighters.reduce((all, one, i) => {
            const ch = Math.floor(i/chunkSize); 
            all[ch] = [].concat((all[ch]||[]),one); 
            return all
        }, []);

    return (
        <div>
            {chunkedFighters.map((fighters, i) => <FighterCards fighters={fighters} key={i} />)}         
            <RuleCards gang={gang} />
        </div> 
    );
}