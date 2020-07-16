import React from 'react';
import './App.css';
import CreateTodo from './components/CreateTodo';
import ReadTodo from './components/ReadTodo';

export default function App() {
  return (
    <div className="App">
      <h1>Todo</h1>
      <CreateTodo />
      <ReadTodo />
    </div>
  );
}
