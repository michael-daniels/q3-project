let initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COMMENTS_SUCCESS":
      return [...action.payload]
    case "FETCH_COMMENTS_FAILED":
      return action.payload
    case "ADD_COMMENT":
      return [...state, action.payload]
    default:
      return state
  }
}
