import React from 'react';
import { MyProvider } from './CreateContext';
import ProductList from './ProductList';

const App = () => {
  return (
    <MyProvider>
      <div style={{ padding: '20px' }}>
        <h1>Product List</h1>
        <ProductList />
      </div>
    </MyProvider>
  );
};

export default App;
