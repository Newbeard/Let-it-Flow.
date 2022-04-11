import { 
  ADD_ITEM_CART, 
  DELETE_ITEM_CART, 
  INCREMENT_ITEM_COUNT_CART, 
  DECREMENT_ITEM_COUNT_CART,
  CLEAR_CART, 
  INIT_CART } from '../actionType/userActionType'
  
  
  const initialState = { 
    cart: JSON.parse(localStorage.getItem('cart')) ?? []
  }
  
  export const cartReducer = (state = initialState, action) => {
    
    switch (action.type) {

    //*  >>>>> Добавить товар в корзину <<<<<  
    case ADD_ITEM_CART:

      //*   Проверяем, если такой товар уже есть в корзине, 
      //*   то прибавляем колличество уже к существующему айтему в корзине
      //*   если нет, то добавляем сам товар
      const searchItem = state.cart.find(el => {
        return el.bouquet.id === action.payload.bouquet.id
      })

      if(searchItem) {
        return {
          ...state, cart: state.cart.map(el => {
            if(el.bouquet.id === action.payload.bouquet.id) {
              return { ...el, count: +el.count + action.payload.count }
            } return el
          })
        }
      } else {
    
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }

    //* >>>>> -1 <<<<<
    case INCREMENT_ITEM_COUNT_CART: {
        return {
          ...state, cart: state.cart.map(el => {
            if(el.bouquet.id === action.payload) {
              return { ...el, count: +el.count + 1 }
            } return el
          })
        }
    }

    //*  >>>>> +1 <<<<<
    case DECREMENT_ITEM_COUNT_CART:
      return {
        ...state, cart: state.cart.map(el => {
          if (el.bouquet.id === action.payload && el.count > 1) {
            return { ...el, count: +el.count - 1 };
          } return el;
        }),
      };
      
    //*  >>>>> Удалить товар из корзины <<<<<
    case DELETE_ITEM_CART:
      return {
        ...state, cart: state.cart.filter(el => {
          return el.bouquet.id !== action.payload
        }),
      };
    //*  >>>>> Очистить корзину <<<<<
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};
