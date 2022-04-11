import React, { useState } from 'react';
import './AdminCard.css'
import { deleteBouquet } from '../../../redux/actionCreate/bouquetActionCreate';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import EditModal from '../EditModal/EditModal'

export default function AdminCard({ bouquet }) {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch()
  const deleteHandler = (id) => {
    axios.delete(`http://localhost:4000/bouquets/${id}`)
    .then(({data}) => {dispatch(deleteBouquet(id))})
    .catch(console.error())}

    const openModal = (id) => {
      handleOpen();
    }  

  return (
    <div className='cart-item-card'>
      <div className='cartAdmin-item-card-img-box'>
        <img className='cart-item-card-img' src={`http://localhost:4000/${bouquet.img}`} alt="bouquet" />
      </div>
      {open ? <EditModal bouquet={bouquet} handleClose={handleClose} setOpen={setOpen}/> : <></>}
      <div className='cart-item-card-content'>
        <div className='cart-item-card--name'>{bouquet.title}</div>
        <div className='cart-item-card--price'>{bouquet.price}$</div>
        
        <div className='box-counter'>
          <button className="cart-itemAdmin-btn" onClick={() => openModal(bouquet.id)}>Редактировать</button>
          <button className="cart-itemAdmin-btn" key={bouquet.id} onClick={() => deleteHandler(bouquet.id)}>Удалить</button>
        </div>
      </div>

    </div>
  );
}
