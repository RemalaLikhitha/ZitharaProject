import React, { useState } from 'react';

function SortOptions({ onSort }) {
  const [sortBy, setSortBy] = useState('');

  const handleSortChange = e => {
    const value = e.target.value;
    setSortBy(value);
    onSort(value);
  };

  return (
    <div>
      <label htmlFor="sort">Sort By:</label>
      <select id="sort" value={sortBy} onChange={handleSortChange}>
        <option value="">Select</option>
        <option value="date">Date</option>
        <option value="time">Time</option>
      </select>
    </div>
  );
}

export default SortOptions;