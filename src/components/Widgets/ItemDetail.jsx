import React from 'react';

function ItemDetail({ item }) {
  return (
    <div className="item-detail">
      <h2>{item.title}</h2>
      <img src={item.image} alt={item.title} style={{ width: '300px', height: 'auto' }} />
      <p><strong>Descrição:</strong> {item.description}</p>
      <p><strong>Preço:</strong> R$ {item.price}</p>
      <p><strong>Estoque:</strong> {item.stock} unidades disponíveis</p>
    </div>
  );
}

export default ItemDetail;
