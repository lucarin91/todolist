import React, {Component} from 'react'

import './AddTodo.css';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {todo: ''};
    this.handleChange= this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }
  handleChange(event) {
    this.setState({todo: event.target.value});
  }
  handleAdd(event) {
    event.preventDefault();
    this.props.onNewTodo(this.state.todo);
    this.setState({todo: ''})
  }
  render() {
    return (<form onSubmit={this.handleAdd}>
      <input class="AddTodo-input" type="text" value={this.state.todo} onChange={this.handleChange}/>
      <input type="submit" value="Add"/>
    </form>);
  }
}

export default AddTodo;
