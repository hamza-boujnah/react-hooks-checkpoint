import React from 'react';

function Filter({ onTitleChange, onRatingChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Filter by Title"
        onChange={(e) => onTitleChange(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by Rating"
        onChange={(e) => onRatingChange(parseFloat(e.target.value))}
      />
    </div>
  );
}

export default Filter;
