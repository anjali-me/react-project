import React from 'react';

const Details = ({ title, description, price }) => {
  return (
    <div>
      <h2 style={{ fontSize: '1.5em', margin: '10px 0' }}>{title}</h2>
      <p>{description}</p>
      <p style={{ fontWeight: 'bold' }}>Price: ${price}</p>
    </div>
  );
};

export default Details;
