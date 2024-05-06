import React, { useState, useEffect, useContext } from 'react';
import './Main.css';
import { Link } from "react-router-dom";
import { CartContext } from './CartContext';

// import one from '.';
// import two from './2.jpg';
// import three from './3.jpg';
// import four from './4.jpg';
// import five from './5.jpg';
// import six from './6.jpg';
// import seven from './7.jpg';
// import eight from './8.jpg';

let cards = [
    {
        name: "Name",
        title: "Title",
        src: "/imgs/1.jpg",
        link: "kofa",
    },
    {
        name: "Name2",
        title: "Title",
        src: "/imgs/2.jpg",
        link: "kofa",
    },
    {
        name: "Name",
        title: "Title",
        src: "/imgs/1.jpg",
        link: "kofa",
    },
    {
        name: "Name",
        title: "Title",
        src: "/imgs/1.jpg",
        link: "kofa",
    },
    {
        name: "Name",
        title: "Title",
        src: "/imgs/1.jpg",
        link: "kofa",
    },
    {
        name: "Name",
        title: "Title",
        src: "/imgs/1.jpg",
        link: "kofa",
    },
    {
        name: "Name",
        title: "Title",
        src: "/imgs/1.jpg",
        link: "kofa",
    },
    {
        name: "Name",
        title: "Title",
        src: "/imgs/1.jpg",
        link: "kofa",
    },
];

function Main() {
    const cardJsx = cards.map((card, i) => (
        <Card key={i} card={card} />
    ));

    return (
        <div className="main">
            <div className="product-container">
                {cardJsx}
            </div>
        </div>
    );
}

function Card({ card, isInCart=false }) {
    const { cart, setCart } = useContext(CartContext);
    function handleClick(e) {
        e.preventDefault();
        cart[card.name] = card;
        setCart(structuredClone(cart));
    }
    return (
        <div className="product">
            <Link to={card.link} className="product-link">
                <img src={card.src} alt={card.name} />
                <h2>{card.name}</h2>
                <p>{card.title}</p>
                <div>
                    {cart[card.name] !== undefined ? (
                        <button className='buybtn' disabled>В корзине</button>
                    ) : (
                        <button className='buybtn' onClick={handleClick}>Купить</button>
                    )}
                </div>
            </Link>
        </div>
    );
}

export default Main;
