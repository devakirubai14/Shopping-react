import React from 'react';
import products from '../data/products';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Homepage.css';

const Homepage = () => {
    const navigate = useNavigate();
    const { addToCart, getTotalItemCount } = useCart();

    const handleAddToCart = (e, product) => {
        e.stopPropagation(); 
        addToCart(product);
        console.log(`${product.name} added to cart!`);
    };

    return (
        <div className='home-page'>
            <header className='home-header'>
                <h1>Welcome to Women's Shopping!</h1>
                <p>Discover your next favorite thing</p>
                <div className="header-actions">
                    <button className='cart-button' onClick={() => navigate('/cart')}>
                        🛒 Cart ({getTotalItemCount()})
                    </button>
                    <button className='logout-button' onClick={() => navigate('/')}>Logout</button>
                </div>
            </header>
            <main className='product-grid'>
                {products.map(
                    product => (
                        <div
                            key={product.id}
                            className='product-card'
                            onClick={() => navigate(`/home/${product.id}`)}>
                            <div className='product-image-container'>
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div className='product-info'>
                                <h3>{product.name}</h3>
                                <p className='product-price'>{product.price}</p>
                                <button
                                    className='add-to-cart-card-btn'
                                    onClick={(e) => handleAddToCart(e, product)}>
                                    Add To Cart
                                </button>
                            </div>
                        </div>))}
            </main>
        </div>
    );
}

export default Homepage;