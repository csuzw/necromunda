import React from 'react';
import Gallery from '../components/Gallery';

import { gang } from '../data/gang.js';

export default function Home() {
    return (
        <Gallery gang={gang} />
    );
}