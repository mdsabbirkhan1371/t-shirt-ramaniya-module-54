import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Anty = ({ house }) => {
    const ring = useContext(RingContext);

    return (
        <div>
            <h3>Anty</h3>
            <div>
                <p>house: {house}</p>
                <p>{ring}</p>
            </div>
        </div>
    );
};

export default Anty;