import React from 'react';
import Thumbnail from './Thumbnail';
import Details from './Details';
import Rating from './Rating';

const ProductCard = ({ product }) => {
  return (
    <div style={cardStyle}>
      <Thumbnail src={product.image} alt={product.title} />
      <Details title={product.title} description={product.description} price={product.price} />
      <Rating rating={product.rating.rate} count={product.rating.count} />
    </div>
  );
};

const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  margin: '10px',
  padding: '10px',
  width: '300px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
};

export default ProductCard;
