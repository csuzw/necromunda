import React from 'react';
import GangRoster from '../components/GangRoster';

import { gang } from '../data/gang.js';

export default function Gang() {
    return (
        <GangRoster gang={gang} />
    );
}