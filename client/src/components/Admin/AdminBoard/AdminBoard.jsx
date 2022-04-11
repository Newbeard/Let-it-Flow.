import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import AdminCard from '../AdminCard/AdminCard'
import AddCard from "../AddCard/AddCard";


export default function AdminBoard() {

  const dispatch = useDispatch()
  useEffect(() => {
    fetch('http://localhost:4000/bouquets')
     .then(res => res.json())
     .then(data => dispatch({ type: 'INIT_BOUQUETS', payload: data}))
     .catch(err=>console.log(err));
   }, [])

  const { bouquets } = useSelector((state) => state)
  const [query, setQuery] = useState('')

  const filteredBouquets = bouquets.filter((bouquet) => {
    return bouquet.title.toLowerCase().includes(query.toLowerCase())
  })

  return (
    <div className="container divider">
      <div className="nowrapper">
        <AddCard />
        <div className="calendar">
        <div className="filterAdmin">
          <input type="search" onChange={(event) => setQuery(event.target.value)} className="card-input__input" placeholder="Поиск букета.."></input>
        </div>
        <div className='card-boxAdmin scroller'>
            {filteredBouquets && filteredBouquets.map((bouquet) => <AdminCard key={bouquet.id} bouquet={bouquet} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
