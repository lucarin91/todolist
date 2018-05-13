import React from 'react';

import './TodoList.css';

function TodoList(props) {
  return (
    <ul class="TodoList-ul">
      {props.todos.map((v, i) => <li class="TodoList-li">
        <i class="fas fa-minus-circle" onClick={() => props.onDelete(i)}></i>
        <input type="checkbox"
          checked={v.completed}
          onClick={() => props.onToggle(i)}></input>
        <span>{v.name}</span>
      </li> )}
    </ul>
  );
}

export default TodoList;
