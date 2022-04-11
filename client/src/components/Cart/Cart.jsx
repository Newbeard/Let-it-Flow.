import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Cart_item from '../Cart_item/Cart_item';
import { clearCart, initCart } from '../../redux/actionCreate/userActionCreate'
import { useRef } from 'react';
import ModalOrder from '../Modal/ModalOrder'
import ModalError from '../Modal/ModalError';
import { v4 as uuidv4 } from "uuid"
// import ModalBuy from '../Modal/ModalBuy';
import './Cart.css'
import '../Modal/ModalOrder.css'


function Cart() {

  const { bouquets, user, cart: {cart} } = useSelector((state) => state)
  const [method, setMethod] = useState(false)
  const [uniqId, setUniqId] = useState('')
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const inputTime = useRef();
  const inputDate = useRef();
  const inputStreet = useRef();
  const inputHouse = useRef();
  const inputApartment = useRef();

  // const [visible, setVisible] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleOpenError = () => setError(true);
  const handleClose = () => setOpen(false);
  const handleCloseError = () => setError(false);

  //* Синхронизация состояния корзины и localStorage
  useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart))
      setUniqId(uuidv4())
  }, [cart])
  
  //* Подсчет общей стоимости корзины
  const total = cart.reduce((sum, el) => sum + el.bouquet.price * el.count, 0)

  //* Отправляем в бд сформированный заказ (доставка)
  const sendOrderDelivery = () => {
    
    fetch('http://localhost:4000/order/', {
      method: 'POST',
      body: JSON.stringify({
        date: inputDate?.current.value,
        street: inputStreet?.current.value,
        house: inputHouse?.current.value,
        apartment: inputApartment?.current.value,
        user_id: user?.user.id,
        uuid: uniqId
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(res => {
      if(res.ok) {
        cartFormation()
        setTimeout(deleteCart, 3000)
        handleOpen()
      } else {
        console.log('error');
        handleOpenError()
      }
    })
    // console.log(user.user.id);
  }

  //* заполняем таблицу Cart, по каждому айтему в корзине
  const cartFormation = () => {
    // handleOpen()

    cart.map(item => fetch('http://localhost:4000/cart', {
      method: 'POST',
      body: JSON.stringify({ item, id: user?.user.id, uuid: uniqId}),
      // body: JSON.stringify({ item, id: user.userData.user.id }),
      headers: {
        'Content-Type': 'application/json',
      }
    }))
  }



  // const sendOrderPickup = () => {
  //   fetch('http://localhost:4000/order/pickup', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       time: inputTime.current.value,
  //       date: inputDate.current.value,
  //       uuid: uniqId
  //       // user_id: user.userData.user.id
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     }
  //   })
  // }
  
  //* Очистка корзины
  const deleteCart = () => {
    dispatch(clearCart())
  }

  return (
    <div className='container'>
      <h2 className='cart-header'>Ваша корзина { !cart.length && 'пуста'}</h2>
      <div className='cart-container'>
        <div className='cart-list-wrapper'>
          <div className='cart_item-list'>
            {cart ? cart.map((elem) =>
             <Cart_item key={elem.bouquet.id} item={elem}/>) : 'Корзина пуста'}
          </div>
          {cart.length > 0 && <button className='cart-btn-clear' onClick={() => deleteCart()}>Очистить корзину</button>}
        </div>

        { cart.length >= 1 &&
          <div className='cart-wrapper'>
            <h3 className='cart-delivery-title'>Выберите способ доставки</h3>
            <div className="cart-delivery-method-box">
              <div className="cart-delivery-method" onClick={() => setMethod(0)}>Доставка</div>
              <div className="cart-delivery-method" onClick={() => setMethod(1)}>Самовывоз</div>
            </div>
            
            {method === 0 && 
              <div className="cart-box-delivery">
                <div className="cart-delivery-time-date">
                <input className="cart-delivery-date" ref={inputDate} type="datetime-local" autoComplete='off' required />
                </div>

                <div className="cart-delivery-fild">
                  <label htmlFor="street" className="cart-delivery-label">Улица</label>
                  <input className='cart-delivery-fild-street' id="street" ref={inputStreet} placeholder="" name="street" autoComplete='off' required/>
                </div>

                <div className="cart-delivery-fild">
                  <label htmlFor="house" className="cart-delivery-label">Дом</label>
                  <input className='cart-delivery-fild-house' id="house" ref={inputHouse} placeholder="" name="house" autoComplete='off' required/>
                </div>

                <div className="cart-delivery-fild">
                  <label htmlFor="apartment" className="cart-delivery-label">Квартира</label>
                  <input className='cart-delivery-fild-apartment' ref={inputApartment} placeholder="" id="apartment" name="apartment" autoComplete='off' required/>
                </div>
              </div>
            }
            <div className="cart-summ-order-title">Сумма заказа</div>

            <h3 className="cart-summ-order">{total} руб.</h3>

            <div className='cart-btns-box'>
              {/* {open ? <ModalBuy handleClose={handleClose} setOpen={setOpen}/> : <></>} */}
              {/* <button className='cart-btn-pay' onClick={() => cartFormation()}>Оплатить</button> */}
              {/* <button  className="btn" onClick={() => console.log(user.userData.user.id)}>Ордер</button> */}
              {open ? <ModalOrder handleClose={handleClose} setOpen={setOpen}/> : <></>}
              {error ? <ModalError handleClose={handleCloseError} setError={setError}/> : <></>}
              <button  className='cart-btn-order' onClick={() => sendOrderDelivery()}>Заказать</button>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default (Cart);


