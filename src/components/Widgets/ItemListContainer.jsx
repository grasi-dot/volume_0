import React, { useState } from 'react';
import ItemList from './ItemList';
import itemsData from '../../data/itens.json';

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  const task = new Promise((resolve) => {
    setTimeout(() => {
      resolve(itemsData);
    }, 2000);
  });

  task
    .then((data) => {
      setItems(data);
    })
    .catch((error) => {
      console.error('Erro ao buscar itens:', error);
    });

  return (
    <div className="container mt-5" style={{ maxWidth: '1200px', marginTop: '50px' }}>
      <div className="p-5 text-center border rounded shadow-sm">
        <h2 className="text-primary">{greeting}</h2>
      </div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;

