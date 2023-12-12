import React from 'react';
import Weather from './components/Weather';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  let color = 'lightblue';
  document.body.style = `background: ${color};`;
  return (
    <div className="App">
      <Weather />
      <NewTodo />
      <TodoList />
    </div>
  );
}

export default App;
