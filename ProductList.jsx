import React, { useContext } from 'react';
import { MyContext } from './CreateContext';
import ProductCard from './ProductCard';

const ProductList = () => {
  const { products } = useContext(MyContext);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
