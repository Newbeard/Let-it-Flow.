import React from 'react';
import Categories from '../Categories/Categories';
import Slider from '../Slider/Slider';
import YandexMap from '../YandexMap/YandexMap';
import BouquetListMain from '../BouquetListMain/BouquetListMain'
// import './Main.css'

import { useSelector } from 'react-redux'
import { useEffect } from 'react';
import Footer from '../Footer/Footer';

function Main(props) {

  const { cart } = useSelector((state) => state.cart)

  useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])
  return (
    <>
      <Slider />
      <Categories />
      <BouquetListMain />
      <YandexMap />
    </>
  );
}

export default Main;
