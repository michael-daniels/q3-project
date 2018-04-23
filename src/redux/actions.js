//Optionally, we can export these type labels to be used elsewhere
// export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS"
// export const FETCH_TODOS_FAILED = "FETCH_TODOS_FAILED"
// export const ADD_TODO = "ADD_TODO"

//Below, we export the action creators to be called on events.

export const fetchTodos = () => {
  return dispatch => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then(response => response.json())
      .then(todos => dispatch({
        type: "FETCH_TODOS_SUCCESS",
        payload: todos
      }))
      .catch(err => dispatch({
        type: "FETCH_TODOS_FAILED",
        payload: err
      }))

  }
}

export const addTodo = todo => {
  let newTodo = {
    title: todo,
    completed: false,
  }
  return dispatch => {
    dispatch({
      type: "ADD_TODO",
      payload: newTodo
    })
  }
}
