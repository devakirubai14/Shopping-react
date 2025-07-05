import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../data/products';
import { useCart } from '../context/CartContext'; 
import './ProductDetails.css';

const ProductDetails = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const { addToCart, getTotalItemCount } = useCart(); 
    const product = products.find(item => item.id === productId);

    if (!product) {
        return <div>Product not found!</div>;
    }

    const handleAddToCart = () => {
        addToCart(product);
        alert(`${product.name} has been added to your cart!`);
    };

    return (
        <div className='product-details-page'>
            <header className='details-header'>
                <button className='back-button' onClick={() => navigate(-1)}>← Back to Products</button>
                <div>
                    <button className='cart-button' onClick={() => navigate('/cart')}>
                        🛒 Cart ({getTotalItemCount()})
                    </button>
                    <button className='logout-button-details' onClick={() => navigate('/')}>Logout</button>
                </div>
            </header>
            <div className='product-details-container'>
                <div className='product-details-image'>
                    <img src={product.image} alt={product.name} />
                </div>
                <div className='product-details-info'>
                    <h1>{product.name}</h1>
                    <p className='product-catchy'>"{product.catchy}"</p>
                    <p className='product-price-details'>{product.price}</p>
                    <p className='product-description'>{product.description}</p>
                    <p className='product-stock'>
                        <strong>In Stock:</strong> {product.stock > 0 ? `${product.stock} units left` : 'Out of Stock'}
                    </p>
                    <button className='add-to-cart-button' onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;