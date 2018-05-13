import { connect } from 'react-redux'

import TodoList from './TodoList';
import {toggleTodo, removeTodo} from "./actions";


const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDelete: name => {
      dispatch(removeTodo(name))
    },
    onToggle: index => {
      dispatch(toggleTodo(index))
    }
  }
}

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default TodoListContainer;
