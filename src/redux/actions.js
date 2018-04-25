//Optionally, we can export these type labels to be used elsewhere
// export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS"
// export const FETCH_TODOS_FAILED = "FETCH_TODOS_FAILED"
// export const ADD_TODO = "ADD_TODO"

//Below, we export the action creators to be called on events.

export const fetchUser = (currentUser) => {
  return dispatch => {
    fetch(`http://localhost:8000/user/${currentUser}`)
      .then((user) => {
        return user.json()
      })
      .then((user) => {
        return dispatch({
        type: "FETCH_USER_SUCCESS",
        payload: user
        })
      })
      .catch((err) => {
        dispatch({
          type: "FETCH_USER_FAILED",
          payload: err
        })
      })

  }
}

export const fetchComments = (currentUser) => {
  return dispatch => {
    fetch(`http://localhost:8000/comments/${currentUser}`)
      .then((response) => {
        return response.json()
      })
      .then((comments) => {
        return dispatch({
        type: "FETCH_COMMENTS_SUCCESS",
        payload: comments
        })
      })
      .catch((err) => {
        dispatch({
          type: "FETCH_COMMENTS_FAILED",
          payload: err
        })
      })

  }
}

export const addComment = (user_id, username, content) => {
  let newComment = {
    username: username,
    content: content,
  }
  return dispatch => {
    dispatch({
      type: "ADD_COMMENT",
      payload: newComment
    })
  }
}
