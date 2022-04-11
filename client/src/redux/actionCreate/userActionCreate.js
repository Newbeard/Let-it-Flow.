import { 
  LOGIN,
  SIGNUP, 
  ADD_ITEM_CART, 
  DELETE_ITEM_CART, 
  INCREMENT_ITEM_COUNT_CART, 
  DECREMENT_ITEM_COUNT_CART,
  CLEAR_CART,
  INIT_CART,
  LOGOUT,
  REFRESH_TOKEN } from "../actionType/userActionType"


export const login = (user) => ({
  type: LOGIN,
  payload: user
})

export const signup = (user) => ({
  type: SIGNUP,
  payload: user
})

//* init cart
export const initCart = () => ({
  type: INIT_CART
})

//* Добавить товар в корзину
export const addItemToCart = (bouquet) => ({
  type: ADD_ITEM_CART,
  payload: bouquet
})

//* Удалить товар из корзины
export const DeleteItemToCart = (id) => ({
  type: DELETE_ITEM_CART,
  payload: id
})

//* Увеличить колличество товара в корзине
export const incrementItemToCart = (id) => ({
  type: INCREMENT_ITEM_COUNT_CART,
  payload: id
})

//* Уменьшить колличество товара в корзине
export const decrementItemToCart = (id) => ({
  type: DECREMENT_ITEM_COUNT_CART,
  payload: id
})

//* Очистить корзину
export const clearCart = () => ({
  type: CLEAR_CART,
})
export const logout = () => ({
  type: LOGOUT,
  payload: null
})

export const refreshToken = (accessToken) => (dispatch) => {
  dispatch({
    type: REFRESH_TOKEN,
    payload: accessToken,
  })
}




