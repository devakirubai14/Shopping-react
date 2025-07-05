import { createContext, useState, useContext } from "react";

//Create the context
const CartContext = createContext();

//Create a custom hook for easy access to the context
export const useCart = () => useContext(CartContext);

//Create the Provider component
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                // If item exists, increase quantity
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                // If item is new, add it to the cart with quantity 1
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    const increaseQuantity = (productId) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQuantity = (productId) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === productId ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
            )
        );
    };
    
    // This function removes the entire item line from the cart
    const removeItemFromCart = (productId) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
    };


    const clearCart = () => {
        setCartItems([]);
    };

    const getTotal = () => {
        return cartItems.reduce((sum, item) => {
            // Removes currency symbol and converts to number
            const price = Number(item.price.replace(/[^0-9.-]+/g, ""));
            return sum + item.quantity * price;
        }, 0);
    };
    
    const getTotalItemCount = () => {
        return cartItems.reduce((sum, item) => sum + item.quantity, 0);
    };

    // Bundle all values and functions to be provided
    const value = {
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeItemFromCart,
        clearCart,
        getTotal,
        getTotalItemCount,
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};