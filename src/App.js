import React from 'react';

import TodoListContainer from './TodoListContainer';
import AddTodoContainer from './AddTodoContainer';

import './App.css';

function App() {
  return (
    <div className="App-container">
      <TodoListContainer/>
      <AddTodoContainer/>
    </div>
  );
}

export default App;
