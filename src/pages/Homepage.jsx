import React from 'react';
import products from '../data/products';
import { useNavigate } from 'react-router-dom';
import './Homepage.css'; 

const Homepage = () => {
    const navigate = useNavigate();
    return (
        <div className='home-page'>
            <header className='home-header'>
                <h1>Welcome to Dexian Women's Shopping!</h1>
                <p>Discover your next favorite thing</p>
                <button className='logout-button' onClick={() => navigate('/')}>Logout</button>
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
                            </div>
                        </div>))}
            </main>
        </div>
    );
}

export default Homepage;