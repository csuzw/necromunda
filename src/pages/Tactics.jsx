import React from 'react';
import TacticCards from '../components/TacticCards.jsx';

import { deck } from '../data/tactics.js';

export default function Tactics() {

    return (<TacticCards deck={deck} />);
}