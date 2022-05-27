import React from 'react';
import Special from '../Special/Special';

const Myself = ({ house, gift }) => {
    return (
        <div>
            <h4>Myself</h4>
            <div>
                <p>House: {house}</p>
                <Special gift={gift}></Special>
            </div>
        </div>
    );
};

export default Myself;