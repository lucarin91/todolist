import React, {Component} from 'react';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  handleCheck(target, index) {
    this.props.onCompleted(index, target.checked);
  }
  handleDel(index){
    this.props.onDeleted(index);
  }
  render() {
    return (
      <ul class="TodoList-ul">
        {this.props.todo.map((v, i) => <li class="TodoList-li">
          <i class="fas fa-minus-circle" onClick={() => this.handleDel(i)}></i>
          <input type="checkbox"
            defaultChecked={v.completed}
            onClick={e => this.handleCheck(e.target, i)}></input>
          <span>{v.name}</span>
        </li> )}
      </ul>
    );
  }
}

export default TodoList;
