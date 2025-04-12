import React, { useState, useEffect } from 'react';
import './Shopping.css';

const Shopping = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products from an API or database
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('https://api.example.com/products');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    return (
        <div className="shopping">
            <h2>Shopping</h2>
            <div className="product-list">
                {products.map((product) => (
                    <div key={product.id} className="product">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                        <button>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shopping;
