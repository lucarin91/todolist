import { combineReducers } from 'redux'

import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './actions';


function todos(state=[], action){
  switch(action.type) {
  case ADD_TODO:
    return [...state, {name: action.todo, completed: false}];
  case REMOVE_TODO: {
    let _state = [...state];
    _state.splice(action.index, 1);
    return _state;
  }
  case TOGGLE_TODO: {
    let _state = [...state];
    let _todo = {..._state[action.index]};
    _todo.completed = !_todo.completed
    _state[action.index] = _todo; 
    return _state;
  }
  default:
    return state;
  }
}

const todoApp = combineReducers({
  todos
})

export default todoApp;
