import React, { useState, useEffect, memo } from "react";
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { addBouquet } from './../../../redux/actionCreate/bouquetActionCreate'
import AdminCard from '../AdminCard/AdminCard'

function AddCard(props) {

  const [title, setTitle] = useState()
  const [price, setPrice] = useState()
  const [file, setFile] = useState('');

  const { categories } = useSelector((state) => state)
  const dispatch = useDispatch()
  
  useEffect(() => {
    fetch('http://localhost:4000/categories')
    .then((res) => res.json())
    .then(result => dispatch({
      type: 'INIT_CATEGORIES',
      payload: result
    }))
    .catch(err => console.log(err))
  },[])

  const onChange = e => {
    setFile(e.target.files[0]);
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append('file', file);

    axios.post('http://localhost:4000/bouquets', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }}).then(({ data }) => {
       dispatch(addBouquet(data))
    })
    .catch(console.error());
    setTitle('')
    setPrice('')
	};

  return (
    <div>
          <h2>Привет, Админ</h2>
          <form onSubmit={handleSubmit}>
            <div className="card-input">
              <label className="card-input__label">Название</label>
              <input value={title} onChange={(e) => setTitle(e.target.value)} className="card-input__input"  type="text" name="title" required />
            </div>
            <div className="card-input">
              <label className="card-input__label">Описание</label>
              <textarea type="text" name="description" id="" className="card-input__input"></textarea>
            </div>
            <div className="card-input">
              <label className="card-input__label">Стоимость</label>
              <input value={price} onChange={(e) => setPrice(e.target.value)} className="card-input__input"  type="number" name="price" required />
            </div>

            <div className="card-input">
              <label className="card-input__label">Фото букета</label>
              <input onChange={onChange} type="file" name="img" id="img" className="card-input__input" />
            </div>

            <div className="card-input">
              <label className="card-input__label">Категория</label>
              <select name="category_id" id="" className="card-input__input">
                {categories?.map((category) => <option value={category.id}>{category.name}</option>)}
              </select>
            </div>
            <button className="btn">Добавить букет</button>
          </form>
        </div>
  );
}

export default AddCard;