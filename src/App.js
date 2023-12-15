import React from 'react';

import Weather from './features/weather/Weather';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import Background from './components/Background';
import Footer from './components/Footer';
import { useSelector } from 'react-redux';
import { selectBackground } from './features/style/styleSlice';
import './App.css';

function App() {
  const background = useSelector(selectBackground);
  const image = `./images/${background}.jpg`;
  document.body.style.background = `url(${image})`;
  return (
    <div className="App">
      <Weather />
      <NewTodo />
      <TodoList />
      <Background />
      <Footer/>
    </div>
  );
}

export default App;