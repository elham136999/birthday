import React from "react";

const Categories = ({ filterItems, categoryes }) => {
  return (
    <div className='btn-container'>
      {categoryes.map((category, index) => {
        return (
          <button
            type='button'
            className='filter-btn'
            key={index}
            onClick={() => filterItems(category)}>
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
