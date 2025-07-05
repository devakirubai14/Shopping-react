import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './CartPage.css'; 

const CartPage = () => {
    const { cartItems, increaseQuantity, decreaseQuantity, removeItemFromCart, getTotal } = useCart();
    const navigate = useNavigate();
    const shippingCharge = 50;

    const handleCheckout = () => {
        alert('Proceeding to checkout!');
        
    };

    return (
        <div className="cart-page">
            <header className="cart-header">
                <h1>Your Shopping Cart</h1>
                <button className="continue-shopping-btn" onClick={() => navigate('/home')}>
                    ← Continue Shopping
                </button>
            </header>

            {cartItems.length === 0 ? (
                <div className="empty-cart">
                    <p>Looks like you haven't added anything to your cart yet.</p>
                </div>
            ) : (
                <div className="cart-content">
                    <div className="cart-items-list">
                        {cartItems.map((item) => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h3>{item.name}</h3>
                                    <p className="cart-item-price">{item.price}</p>
                                    <div className="quantity-controls">
                                        <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => increaseQuantity(item.id)}>+</button>
                                    </div>
                                </div>
                                <button onClick={() => removeItemFromCart(item.id)} className="remove-item-btn">
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="cart-summary">
                        <h2>Order Summary</h2>
                        <div className="summary-line">
                            <span>Subtotal</span>
                            <span>₹{getTotal().toLocaleString()}</span>
                        </div>
                        <div className="summary-line">
                            <span>Shipping</span>
                            <span>₹{shippingCharge}</span>
                        </div>
                        <div className="summary-total">
                            <span>Total</span>
                            <span>₹{(getTotal() + shippingCharge).toLocaleString()}</span>
                        </div>
                        <button onClick={handleCheckout} className="checkout-button">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CartPage;