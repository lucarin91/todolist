import React, {Component} from 'react'

import './AddTodo.css';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.input;
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.onAdd(this.input.value);
    this.input.value = '';
  }
  render() {
    return (<form onSubmit={this.handleSubmit}>
      <input ref={node => this.input = node} class="AddTodo-input" type="text"/>
      <input type="submit" value="Add"/>
    </form>);
  }
}

export default AddTodo;
