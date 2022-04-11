
export const categoriesReducer = (state = [], action) => {
  switch (action.type) {

    case 'INIT': {
      return [...state]
    }

    case 'INIT_CATEGORIES':{
      return [...action.payload]
    }
   
    default:
      return state
  }
}
