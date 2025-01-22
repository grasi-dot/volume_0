import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import ItemDetailContainer from './ItemDetailContainer';
import itemsData from '../../data/itens.json';

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);

  useEffect(() => {
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
  }, []);

  const handleItemClick = (id) => {
    setSelectedItemId(id);
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '1200px', marginTop: '50px' }}>
      <div className="p-5 text-center border rounded shadow-sm">
        <h2 className="text-primary">{greeting}</h2>
      </div>
      
      {selectedItemId ? (
        <ItemDetailContainer itemId={selectedItemId} />
      ) : (
        <ItemList items={items} onItemClick={handleItemClick} />
      )}
    </div>
  );
};

export default ItemListContainer;

