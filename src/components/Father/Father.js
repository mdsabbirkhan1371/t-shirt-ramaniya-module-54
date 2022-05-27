import React from 'react';
import Sister from '../Anty/Sister/Sister';
import Brother from '../Brother/Brother';
import Myself from '../Myself/Myself';
import './Father.css';
const Father = ({ house, gift }) => {
    return (
        <div className='father'>

            <h4>Father Section</h4>
            <div>
                <h4><small>house: {house} </small></h4>
            </div>
            <div>
                <Myself house={house} gift={gift}></Myself>
                <Sister house={house}></Sister>
                <Brother house={house}></Brother>
            </div>
        </div>
    );
};

export default Father;