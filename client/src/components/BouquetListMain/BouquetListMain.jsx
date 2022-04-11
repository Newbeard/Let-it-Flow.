import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Card from "../Card/Card"
import './BouquetListMain.css';

function BouquetListMain(props) {
  const [allCatalog, setAllCatalog] = useState(false)
  const { bouquets } = useSelector((state) => state)

  const dispatch = useDispatch()
  
   useEffect(() =>{
   fetch('http://localhost:4000/bouquets')
   .then(res => res.json())
   .then(data => dispatch({ type: 'INIT_BOUQUETS', payload: data}))
   .catch(err=>console.log(err));
},[])
  
 
  return (
    <>
      <div className="card-container">
        <div className="container">
        <p className='category-title'>Популярное</p>
          {!allCatalog &&  <div className='card-box'>
            {bouquets && bouquets.map((bouquet) => <Card key={bouquet.id} bouquet={bouquet}/>).slice(0,4)}
          </div>}
          
          {allCatalog &&
          <div className='card-box'>
          {bouquets && bouquets.map((bouquet) => <Card key={bouquet.id} bouquet={bouquet}/>)}
          </div>}
          <button onClick={() => setAllCatalog(!allCatalog)} className='card-btn-catalog'>{allCatalog ? 'Свернуть' : 'Каталог'}</button>
        </div>
      </div>
    </>
  );
}

export default BouquetListMain;

