import React, { createContext, useState } from 'react';
import Anty from '../Anty/Anty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import "./GrandPa.css"

// diclare context api 
export const RingContext = createContext('ring');


const GrandPa = () => {
    const [house, setHouse] = useState(1)
    const gift = 'platiniam'
    const handleHouse = () => {
        const newHouse = house + 1;
        setHouse(newHouse)
    }
    return (
        // cll context api 
        <RingContext.Provider value={gift}>
            <div className='grandpa'>
                <h3>Hello Grandpa</h3>
                <p>House: {house}</p>
                <button onClick={handleHouse}>Buy A House</button>

                <section style={{ display: 'flex' }}>
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Anty house={house}></Anty>
                </section>

            </div>
        </RingContext.Provider>
    );
};

export default GrandPa;