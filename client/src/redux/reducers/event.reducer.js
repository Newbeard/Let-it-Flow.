import { INIT_EVENTS, ADD_EVENT } from "../actionType/eventActionType"


export const eventReducer = (state = [], action) => {
  switch (action.type) {
    case INIT_EVENTS: {
        return action.payload
    }

    case ADD_EVENT: {
      const { payload } = action
      return [...state, payload]
    }
    
    default:{
      return state
    }
  }
}
