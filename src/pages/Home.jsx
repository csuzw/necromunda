import React from 'react';

export default function Home() {
    return (
        <h1>{process.env.REACT_APP_GANG_NAME}</h1>
    );
}