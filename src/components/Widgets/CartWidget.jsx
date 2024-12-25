import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
      <ShoppingCartIcon style={{ fontSize: '24px', marginRight: '8px' }} />
    </div>
  );
};

export default CartWidget;
