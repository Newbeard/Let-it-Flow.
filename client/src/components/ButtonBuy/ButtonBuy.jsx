import React from 'react';
import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../redux/actionCreate/userActionCreate'
// import "./ButtonBuy.css";

function ButtonBuy({ bouquet, setSwitchBtn }) {

  const [count, setCount] = useState(1)
  
  const dispatch = useDispatch()
  const inputValue = useRef()
  

  const handleCart = () => {
    setSwitchBtn((prev) => !prev)
    dispatch(addItemToCart({
       bouquet,
       count : +inputValue.current.value
      }
    ))
  }

  return (
    <div>
      <div data-min="1" className="counter">
        <button className="minus" type="button" onClick={() => ( count >= 2 ? setCount(count - 1) : setCount(count))}>
          <svg width="16" height="1" viewBox="0 0 16 1" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="0.5" x2="16" y2="0.5" stroke="#292929"/></svg>
        </button>
          <input className="counter_input-fild" ref={inputValue} value={count} id="item_count_1579" />
        <button className="plus" type="button" onClick={() => setCount(count + 1)}>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="7.5" x2="15" y2="7.5" stroke="#292929"/>
          <line x1="7.5" y1="2.18557e-08" x2="7.5" y2="15" stroke="#292929"/>
          </svg>
        </button>
      </div>
      <button className="card-btns" onClick={() => handleCart()}>В корзину</button>
    </div>
  );
}

export default ButtonBuy;
