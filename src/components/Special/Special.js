import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Special = ({ gift }) => {
    // use context api 
    const Ring = useContext(RingContext)
    return (
        <div>
            <h2>Special Person</h2>
            <p>From GrandPa:{Ring}</p>
        </div>
    );
};

export default Special;