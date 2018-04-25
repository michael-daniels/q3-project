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

export const addComment = (username, content) => {
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

export const deleteComment = (id) => {
  fetch(`http://localhost:8000/comment/delete/${id}`, {
    method:'post',
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body:id
  })
  return dispatch => {
    dispatch({
      type: "DELETE_COMMENT",
      payload: id
    })
  }
}

export const getPermissions = (currentUser) => {
  fetch(`http://localhost:8000/permissions/${currentUser}`)
    .then((response) => {
      return response.json()
    })
    .then((permissions) => {
      console.log("The permissions", permissions)
      return permissions
    })
    .catch((err) => {
      return err
    })
}
