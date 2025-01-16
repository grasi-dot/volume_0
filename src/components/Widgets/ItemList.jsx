import React from 'react';
import Item from './Item';

function ItemList({ items }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '10px',
      }}
    >
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ItemList;
