import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Calendar from 'react-awesome-calendar'
import { useNavigate } from 'react-router-dom';
import "./Profile.css";
import axios from 'axios';
import { initEvents, addEvent } from '../../../redux/actionCreate/eventActionCreate';


export default function Profile() {

  // const state = useSelector(state => state)
  // const navigate = useNavigate()
  // console.log(state)

  // if (state.user === null) {
  //   navigate('/signup')
  // }
  
  const { user, events } = useSelector(state => state)
  console.log(user)
  
  const [title, setTitle] = useState()

  const dispatch = useDispatch()

  useEffect(() => {
    axios(`http://localhost:4000/profile/${user?.user.id}`)
    .then(({data}) => {
      dispatch(initEvents(data))
    })
  }, [])

  function handleSubmit(event) {
    event.preventDefault();

  	const payload = {
			date: event.target.date.value,
			title: event.target.title.value,
      user_id: user.user.id,
		};

    axios.post('http://localhost:4000/profile/event', payload)
    .then(({data}) => {
      dispatch(addEvent(data))
    })
    .catch(console.error());
    setTitle('')
	};

  const newEvents = events?.map((event) => {
    event.color = '#fd3153';
    event.from = event.date;
    event.to = event.date;
    return event
  })
 

  return (
    <div className="container">
      <div className="profile-container">
        <div className="profile-form-date">
        {user && (
        <h2>Привет, {user.user.first_name} {user.user.last_name}</h2>
      )}
            <div>
            <h3>Контакты</h3>
            {user && (
        <p>{user.user.email}</p>
      )}
            </div>
          <p>В своем личном кабинете ты можешь отметить дни, в которые ты бы хотел получать букеты цветов</p>
          <form onSubmit={handleSubmit}>
            <div className="card-input">
              <label className="card-input__label">Выберите дату</label>
              <input type="date" name="date" id="" className="card-input__input" />
            </div>
            <div className="card-input">
              <label className="card-input__label">Какое событие</label>
              <input value={title} onChange={(e) => setTitle(e.target.value)} className="card-input__input"  type="text" name="title" required />
            </div>
            <button className="btn">Записать дату</button>
          </form>
        </div>
        <div className="profile-calendar">
        <Calendar events={newEvents} />
        </div>
      </div>
    </div>
  );
}
