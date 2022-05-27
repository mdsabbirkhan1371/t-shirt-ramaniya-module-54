import React from 'react';

const Brother = ({ house }) => {
    return (
        <div>
            <h3>Brother</h3>
            <div>
                <p>{<p>House: {house}</p>}</p>
            </div>
        </div>
    );
};

export default Brother;