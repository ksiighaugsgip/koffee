import { useContext } from 'react';
import './Cart.css';
import { CartContext } from './CartContext';

function Cart() {
    const { cart, setCart } = useContext(CartContext);
    return (
        <div className="cart">
            <h2>Корзина</h2>
            {Object.keys(cart).length === 0 ? (
                <p>Корзина пуста</p>
            ) : (
                <div>
                    {Object.values(cart).map((card, i) => (
                        <Card key={i} card={card} />
                    ))}
                </div>
            )}
        </div>
    );
}

function Card({ card }) {
    const { cart, setCart } = useContext(CartContext);
    function handleClick(e) {
        e.preventDefault();
        delete cart[card.name];
        setCart(structuredClone(cart)) 
    }
    return (<div>
        <img src={card.src} alt={card.name} />
        <p>{card.name}</p>
        <p>{card.title}</p>
        <button onClick={handleClick}>Убрать из корзины</button>
    </div>);
}

export default Cart;