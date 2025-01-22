import React from 'react';

function ItemList({ items, onItemClick }) {
  return (
    <div className="item-list">
      {items.map((item) => (
        <div key={item.id} className="item">
          <h3>{item.title}</h3>
          <img src={item.image} alt={item.title} style={{ width: '100px', height: 'auto' }} />
          <p>Preço: R$ {item.price}</p>
          <button onClick={() => onItemClick(item.id)}>Ver Detalhes</button>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
