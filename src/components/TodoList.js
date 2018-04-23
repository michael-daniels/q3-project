import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'

const TodoList = (props) => {
  let listOfTodos = props.todos.map((todo, idx) => <Todo key={idx} todo={todo}/>)
  return (
    <ul>
      {listOfTodos}
    </ul>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(mapStateToProps)(TodoList)
