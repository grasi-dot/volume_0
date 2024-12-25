import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container mt-5">
      <div className="p-5 text-center border rounded shadow-sm">
        <h2 className="text-primary">{greeting}</h2>
      </div>
    </div>
  );
};

export default ItemListContainer;
