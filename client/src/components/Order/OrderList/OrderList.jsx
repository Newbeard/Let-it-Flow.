import React from 'react';
import CartOrderList from '../CartOrderList/CartOrderList';
import './OrderList.css'


function OrderList({ order, cart }) {

  function getDate(str) {
    var date = new Date(str);
    return date.toLocaleString('ru')
  }
  // console.log(order);
  return (
    <>
    <ul className="order-list">
      <li className="order-item">Номер заказа: <span className='uuid'>{order?.uuid.slice(-5)}</span></li>
      <li className="order-item">Дата доставки: {getDate((order.delivery_date)).slice(0,10)}</li>
      {/* <li className="order-item">Время: {order.delivery_time}</li>
      <li className="order-item">Адрес:</li> */}
      <li className="order-item">Улица: {order.delivery_street}</li>
      <li className="order-item">Дом: {order.delivery_house}</li>
      <li className="order-item">Квартира: {order.delivery_apartment}</li>
    </ul>
    {cart.map(el => <CartOrderList cart={el}  />)}
    </>

  );
}

export default OrderList;
