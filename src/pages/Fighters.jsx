import React from 'react';
import FighterCards from '../components/FighterCards.jsx';

import { gang } from '../data/gang.js';

export default function Fighters() {
    return (
        <FighterCards gang={gang} /> 
    );
}