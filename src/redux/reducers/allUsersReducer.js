let initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL_USERS_SUCCESS":
      return action.payload
    case "FETCH_ALL_USERS_FAILED":
      return action.payload
    default:
      return state
  }
}
