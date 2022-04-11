import React from 'react';
import './Cart_item.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { 
  incrementItemToCart, 
  decrementItemToCart, 
  DeleteItemToCart } from '../../redux/actionCreate/userActionCreate'

import ButtonBuy from '../ButtonBuy/ButtonBuy';


function Cart_item({ item }) {

  const dispatch = useDispatch()
  const [stateId, setId] = useState()

  useEffect(()=> {
    setId(item.bouquet.id)
  },[])



  const incrementItem = (id) => {
    dispatch(incrementItemToCart(id))
  }

  const decrementItem = (id) => {
    dispatch(decrementItemToCart(id))
  }
  const deleteItem = (id) => {
    dispatch(DeleteItemToCart(id))
  }

  return (
    <div className='cart-item-card'>

      <div className='cart-item-card-img-box'>
        <img className='cart-item-card-img' src={`http://localhost:4000/${item.bouquet.img}`} alt="bouquet" />
      </div>

      <div className='cart-item-card-content'>
        <div className='cart-item-card--name'>{item.bouquet.title}</div>
        <div className='cart-item-card--price'>{item.bouquet.price} руб.</div>
        <div className='cart-item-card--id'>id товара: {item.bouquet.id}</div>



        {/* <div className='cart-item-btn-box'>
          <button className='cart-item-btn--minus' onClick={() => decrementItem(stateId)}>-</button>
          <input className='cart-item-btn--input' value={item.count} readonly />
          <button className='cart-item-btn--plus' onClick={() => incrementItem(stateId)}>+</button>
        </div> */}
        
        <div className='box-counter-delete'>
          <div data-min="1" className="counter-cart">

            <button className="minus" type="button" onClick={() => decrementItem(stateId)}>
              <svg width="16" height="1" viewBox="0 0 16 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="0.5" x2="16" y2="0.5" stroke="#292929">
                </line>
              </svg>
            </button>
            
            <input className="counter_input-fild" id="item_count_1579" value={item.count} readonly />

            <button className="plus" type="button" onClick={() => incrementItem(stateId)}>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="7.5" x2="15" y2="7.5" stroke="#292929"></line>
                <line x1="7.5" y1="2.18557e-08" x2="7.5" y2="15" stroke="#292929"></line>
              </svg>
            </button>

          </div>
          <button className="cart-item-btn-delete" onClick={() => deleteItem(stateId)}>Удалить</button>
        </div>
      </div>

    </div>
  );
}

export default Cart_item;
