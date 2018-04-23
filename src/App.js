import React, { Component } from 'react';
import './App.css';
import AddTodoForm from './components/AddTodoForm'
import TodoList from './components/TodoList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
