import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import "./Nav.css";
import axios from 'axios'
import { LOGOUT } from "../../redux/actionType/userActionType";

function Nav() {

  const transport = axios.create({
    withCredentials: true
  })
  

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, cart: {cart} } = useSelector(state => state)


  const logout = async () => {    
    await transport('http://localhost:4000/logout')
    dispatch({
        type: LOGOUT,
    })
  }

  return (
    <>

      <nav className="nav-container">
        <div className="line"></div>
        <div className="container">
        <div className="nav-top-container"> 
             <div className="nav-top-content">
                <div className="nav-top-city-number">Санкт-Петербург</div>
                <div className="nav-top-city-number">+7(812) 123-45-67</div>
              </div>
            </div>
          <div className="nav-wrapper">
          <div className="nav-logo-wrapper">
            <NavLink to="/" className="nav-logo">Let It Flow</NavLink>
            <div>доставка приятных впечатлений*</div>
          </div>
          <ul className="nav-list">
            <li className="nav-item"><NavLink className="nav-item-link" to="/order">Заказы</NavLink></li>
            {/* <img width="35px" src="https://img.icons8.com/external-itim2101-lineal-itim2101/64/000000/external-order-shopping-and-ecommerce-itim2101-lineal-itim2101.png"/> */}
            {!user ?
            <>
            {/* <li className="nav-item"><NavLink className="nav-item-link" to="/info">Информация о компании</NavLink></li> */}
            <li className="nav-item"><NavLink className="nav-item-link" to="/login">Вход в личный кабинет</NavLink></li>
            <li className="nav-item"><NavLink className="nav-item-link" to="/signup">Регистрация</NavLink></li>
            </>
            :
            <>
            {/* <li className="nav-item"><NavLink className="nav-item-link" to="/info">Информация о компании</NavLink></li> */}
            <li className="nav-item"><NavLink className="nav-item-link" to="/profile">Календарь</NavLink></li>
            {/* <img width="35px" src="https://img.icons8.com/ios/50/000000/calendar--v1.png"/> */}
            <li className="nav-item">
              <NavLink className="nav-item-link" to="/cart">
                <div className="nav-item-count-cart">{cart.reduce((sum, el) => sum + el.count, 0)}</div>
              <svg className="nav-item-img-cart" width="45" height="45" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.73828 11.4968L8.50621 27H23.8623L27.6708 11.4968H4.73828Z" stroke="#292929" stroke-miterlimit="10"/>
                <path d="M10.5859 11.8779V10.6384C10.5859 7.51951 13.1148 5 16.2226 5C19.3304 5 21.8592 7.52967 21.8592 10.6384V11.8779" stroke="#292929" stroke-miterlimit="10"/>
              </svg>
              <p className="nav-item-text-cart">Корзина</p>
              </NavLink>
            </li>
            {user.user.admin && <li className="nav-item"><NavLink className="nav-item-link" to="/adminboard">Админка</NavLink></li>}
            <li className="nav-item"><NavLink className="nav-item-link" to="/" onClick={logout}>Выход</NavLink></li>
            {/* <img className="exit" width="32px" src="https://img.icons8.com/ios/50/000000/exit.png"/> */}
            </>
            }
          </ul>
        </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
