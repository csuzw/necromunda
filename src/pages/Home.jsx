import React from 'react';

export default function Home() {
    return (
        <img className="main-image" src={process.env.PUBLIC_URL + '/img/gang.jpg'} alt="The gang" />
    );
}