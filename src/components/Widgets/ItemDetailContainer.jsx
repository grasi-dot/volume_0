import React, { useState, useEffect } from 'react';
import itemsData from '../../data/itens.json';
import ItemDetail from './ItemDetail';

const getItemById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const item = itemsData.find(item => item.id === id);
      if (item) {
        resolve(item);
      } else {
        reject('Item não encontrado');
      }
    }, 2000);
  });
};

function ItemDetailContainer({ itemId }) {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const itemData = await getItemById(itemId);
        setItem(itemData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [itemId]);

  if (loading) {
    return <p>Carregando detalhes...</p>;
  }

  return (
    <div className="item-detail-container">
      <ItemDetail item={item} /> {}
    </div>
  );
}

export default ItemDetailContainer;
