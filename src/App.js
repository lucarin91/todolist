import React, { Component } from 'react';

import TodoList from './TodoList';
import AddTodo from './AddTodo';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {todo: this._loadState() || props.todo};

    // bind handler
    this.handleCompleted = this.handleCompleted.bind(this);
    this.handleNewTodo = this.handleNewTodo.bind(this);
    this.handleDeleted = this.handleDeleted.bind(this);
  }
  handleCompleted(i, value){
    let todo = [...this.state.todo];
    todo[i] = {...this.state.todo[i], completed: value};
    this.setState({todo});
  }
  handleDeleted(index) {
    let todo = [...this.state.todo]
    todo.splice(index, 1)
    this.setState({todo})
  }
  handleNewTodo(todo) {
    this.setState({todo: [...this.state.todo, {name: todo, completed: false}]});
  }
  componentDidUpdate(){
    this._saveState();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Todo list</h1>
        </header>
        <div className="App-container">
          <TodoList todo={this.state.todo}
            onCompleted={this.handleCompleted}
            onDeleted={this.handleDeleted}/>
          <AddTodo onNewTodo={this.handleNewTodo}/>
        </div>
      </div>
    );
  }
  _saveState(state){
    state = state || this.state.todo
    localStorage.setItem('my_state', JSON.stringify(state));
  }
  _loadState(){
    let state = localStorage.getItem('my_state');
    return JSON.parse(state)
  }
}

export default App;
