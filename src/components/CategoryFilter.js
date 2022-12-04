import React from 'react';

function CategoryFilter({ categories, onFilter }) {
  const category = categories.map((category) => {
    return (
      <button key={category} value={category} onClick={onFilter}>
        {category}
      </button>
    );
  });

  return (
    <div className='categories'>
      <h5>Category filters</h5>
      {category}
    </div>
  );
}

export default CategoryFilter;
