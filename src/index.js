import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App';
import todoApp from './reducers'
import './index.css';


const todos_example = [
  {
    name: 'Comprare gli spinaci',
    completed: true,
  },
  {
    name: 'Morire di infarto',
    completed: false,
  },
  {
    name: 'Cancellare la finestra',
    completed: false,
  }
]

const initial_state = loadState() || {todos: todos_example}

const store = createStore(todoApp, initial_state);

store.subscribe(() => {
  saveState()
})

ReactDOM.render(
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Todo list</h1>
    </header>
    <Provider store={store}>
      <App />
    </Provider>,
  </div>, document.getElementById('root'));


function saveState(state){
  state = state || store.getState()
  localStorage.setItem('my_state', JSON.stringify(state));
}

function loadState(){
  let state = localStorage.getItem('my_state');
  return JSON.parse(state)
}
