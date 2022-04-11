import React, { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


function Button({ bouquet }) {

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const [count, setCount] = useState(1)
  const bouquets = useSelector((state) => state.bouquets)

  useEffect(() => {

    const ls = window.localStorage

    ls.setItem('cart', JSON.stringify(cart))

  }, [cart])

  const increment = () => {
    
  }


  const addInCart = () => {
    const item = {
      id: bouquet.id,
      count: 1
    }
    

    dispatch({
      type: 'ADD_TO_CART',
      payload: item
    })
  }

  return (
    <>
      <button onClick={() => addInCart()}></button>
      <button onClick={() => setCount((prev) => prev++)}></button>
    </>
  );
}

export default Button;
