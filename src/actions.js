export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE TODO";
export const TOGGLE_TODO = "TOGLE_TODO";

export function addTodo(todo) {
  return {type: ADD_TODO, todo};
}

export function removeTodo(index) {
  return {type: REMOVE_TODO, index};
}

export function toggleTodo(index) {
  return {type: TOGGLE_TODO, index};
}
