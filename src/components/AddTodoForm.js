import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addTodo } from '../redux/actions'

class AddTodoForm extends Component {
  state = {
    newTodo: ''
  }
  render () {
    return (
      <div>
        <input
          type="text"
          value={this.state.newTodo}
          onChange={e => this.setState({ newTodo: e.target.value })}
        />
        <button onClick={() => this.props.addTodoFunc(this.state.newTodo)}>Submit</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  addTodoFunc: addTodo
}, dispatch)

export default connect(null, mapDispatchToProps)(AddTodoForm)
