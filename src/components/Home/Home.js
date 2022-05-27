import React from 'react';
import Cart from '../Cart/Cart';
import useTshirt from '../hooks/useTshirt';
import Tshirt from '../Tshirt/Tshirt';
import { useState } from "react";
import './Home.css';

const Home = () => {
    const [tshirts, setTshirts] = useTshirt();
    const [cart, setCart] = useState([])



    const handleAdTocart = (selectedItems) => {
        const exist = cart.find(tshirt => tshirt._id === selectedItems._id)
        if (!exist) {
            const newCart = [...cart, selectedItems]
            setCart(newCart)
        }
        else {
            alert('item allready exist')
        }
    }
    const handleRemoveCart = (selectedItems) => {
        const rest = cart.filter(tshirt => tshirt._id !== selectedItems._id);
        setCart(rest);
    }
    return (
        <div className='home-container'>
            <div className="t-shirt-container">
                {
                    tshirts.map(tshirt => <Tshirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAdTocart={handleAdTocart}
                    ></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    handleRemoveCart={handleRemoveCart}
                    cart={cart} ></Cart>
            </div>
        </div>
    );
};

export default Home;