import { INIT_EVENTS, ADD_EVENT } from "../actionType/eventActionType"

export const initEvents = (events) => ({
  type: INIT_EVENTS,
  payload: events
})

export const addEvent = (event) => ({
  type: ADD_EVENT,
  payload: event
})


