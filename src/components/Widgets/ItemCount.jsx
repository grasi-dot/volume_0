import React, { useState } from 'react';

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const add = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const remove = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleOnAdd = () => {
    if (onAdd && stock > 0 && count > 0) {
      onAdd(count);
    } else {
      console.log(`Quantidade selecionada: ${count}`);
    }
  };

  return (
    <div
      style={{
        textAlign: 'center',
        padding: '10px',
        maxWidth: '200px',
        margin: '0 auto',
        backgroundColor: '#f9f9f9',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          marginBottom: '10px',
        }}
      >
        <button
          onClick={remove}
          disabled={count === 1}
          style={{
            padding: '5px 10px',
            backgroundColor: count > 1 ? '#e74c3c' : '#f5b7b1',
            color: 'white',
          }}
        >
          -
        </button>
  
        <h2
          style={{
            fontSize: '24px',
            color: '#333',
            marginBottom: '0',
            padding: '0 10px', 
            width: '40px', // Tamanho fixo para o contador
          }}
        >
          {count}
        </h2>
  
        <button
          onClick={add}
          disabled={count >= stock}
          style={{
            padding: '5px 10px',
            cursor: count < stock ? 'pointer' : 'not-allowed',
            backgroundColor: count < stock ? '#2ecc71' : '#a9dfbf',
            color: 'white',
          }}
        >
          +
        </button>
      </div> 
      <button
        onClick={handleOnAdd}
        disabled={stock === 0 || count === 0}
        style={{
          marginTop: '10px',
          padding: '5px 10px',
          backgroundColor: stock > 0 && count > 0 ? '#3498db' : '#aed6f1',
          color: 'white',
          width: '100%',
        }}
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
}

export default ItemCount;
