import React from 'react';

const Thumbnail = ({ src, alt }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <img src={src} alt={alt} style={{ width: '150px', height: '150px' }} />
    </div>
  );
};

export default Thumbnail;
