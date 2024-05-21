import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create a Context
export const MyContext = createContext();

// Create a Provider component
export const MyProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching the products', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <MyContext.Provider value={{ products }}>
      {children}
    </MyContext.Provider>
  );
};
