let initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL_USERS_SUCCESS":
      return action.payload
    case "FETCH_ALL_USERS_FAILED":
      return action.payload
    case "SHOW_FOUND":
      console.log("HEARD IN REDUCER SHOW FOUND", state)
      return [...state.filter((item) => {
        return item.lostorfound === 'Found'
      })]
    case "SHOW_LOST":
      return [...state.filter((item) => {
        return item.lostorfound === 'Lost'
      })]
    default:
      return state
  }
}
