import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import './CardOrderList.css'

function CartOrderList({cart}) {

  const [bouquet, setBouquet] = useState('')

useEffect(() => {
  fetch('http://localhost:4000/cart/bouquet', {
    method: 'POST',
    body: JSON.stringify({ id : cart.bouquet_id }),
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(res => res.json())
  .then(res => setBouquet(res.bouquet))

}, [])

  return (
    <div className='order-bouquet'>
      <div className='order-bouquet-box'>
        <p className='order-bouquet-number'>Заказ: <span className='uuid'>{cart?.uuid.slice(-5)}</span></p> 
        <p className='order-bouquet-title'>{bouquet.title}</p>
        <Link to={`/card/${bouquet.id}`}>
          <img width="100" src={`http://localhost:4000/${bouquet.img}`} alt="dsa" />
        </Link>
        <p className='order-bouquet-count'>{cart.count} шт.</p>
      </div>
    </div>
  );
}

export default CartOrderList;
