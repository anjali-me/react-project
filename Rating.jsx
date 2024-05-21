import React from 'react';

const Rating = ({ rating, count }) => {
  return (
    <div>
      <p>Rating: {rating} / 5</p>
      <p>({count} reviews)</p>
    </div>
  );
};

export default Rating;
