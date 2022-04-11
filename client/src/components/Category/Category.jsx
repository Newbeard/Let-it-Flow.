import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import Card from "../Card/Card"

function Category() {

const { bouquets, categories } = useSelector((state) => state)
const dispatch = useDispatch()
const { id } = useParams()

// useEffect(() =>{
//   fetch(`http://localhost:4000/categories/${id}`)
//   .then(res => res.json())
//   .then(data => dispatch({ type: 'INIT_CATEGORY_BOUQUETS', payload: data}))
//   .catch(err=>console.log(err));
// },[dispatch])

// useEffect(() => {
//   dispatch({ type: 'INIT'})
// }, [])


const category = categories.find((el) => el.id == id);
const bouquetsArray = bouquets.filter((bouquet) => bouquet.category_id == id)

  return (
    <div className='category-container'>
      <div className='container'>
        <h1>{category?.name}</h1>
        <div className='category-box'>
        { bouquetsArray && bouquetsArray.map((bouquet) => <Card key={bouquet.id} bouquet={bouquet}/>)}
        </div>
     </div>
    </div>
  );
}

export default Category;
