import {
  ADD_BOUQUET,
  DELETE_BOUQUET,
  UPDATE_BOUQUET,
  INIT_CATEGORY_BOUQUETS,
  INIT_BOUQUETS
} from '../actionType/bouquetActionType'


export function bouquetsReducer(state = [], action) {
  

  switch (action.type) {

    case INIT_BOUQUETS: {
      return [...action.payload]
    }

    case INIT_CATEGORY_BOUQUETS: {
      return {...state, bouquets: action.payload}
    }

    case ADD_BOUQUET:
      return [...state, action.payload]

    case DELETE_BOUQUET:
      const id = action.payload
      const index = state.findIndex((bouquet) => bouquet.id === id)
      const bouquets = [...state]
      bouquets.splice(index, 1)
      return [ ...bouquets ]

    case UPDATE_BOUQUET:
      return [...state.map(el => {
        if (el.id === action.payload.id) {
          return {
            ...el, 
            id: action.payload.id,
            title: action.payload.title, 
            description: action.payload.description,
            img: action.payload.img,
            price: action.payload.price,
            category_id: action.payload.category_id,
          }
        } else {
          return el
        }
      })]

    default: {
      return state
    }
  }
}
