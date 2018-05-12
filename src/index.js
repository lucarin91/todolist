import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const todo_init = [
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

ReactDOM.render(<App todo={todo_init}/>, document.getElementById('root'));
registerServiceWorker();
