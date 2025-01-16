import React from 'react';
import ItemCount from './ItemCount';

function Item({item}) {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center',
        marginBottom: '10px',
      }}
    >
      <img
        src={item.image}
        alt={item.title}
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '5px',
        }}
      />
      <h3>{item.title}</h3>
      <p>Preço: R$ {item.price.toFixed(2)}</p>
      <ItemCount stock={item.stock} initial={1}/>
    </div>
  );
}

export default Item;
