import React from 'react';
import './Tshirt.css'
const Tshirt = ({ handleAdTocart, tshirt }) => {

    const { name, price, picture, } = tshirt;


    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <button onClick={() => handleAdTocart(tshirt)}>addTocart</button>

        </div>
    );
};

export default Tshirt;