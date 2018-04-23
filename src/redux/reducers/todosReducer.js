// Optionally, we can import the action types which are just strings to fill into the cases below
// import {
//   FETCH_TODOS_FAILED,
//   FETCH_TODOS_SUCCESS,
//   ADD_TODO
// } from '../actions'

let initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TODOS_SUCCESS":
      return [...action.payload]
    case "FETCH_TODOS_FAILED":
      return action.payload
    case "ADD_TODO":
      return [...state, action.payload]
    default:
      return state
  }
}
