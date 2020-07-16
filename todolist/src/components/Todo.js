import React from 'react';
import Firebase from '../Firebase';
import '../App.css';

export default function Todo({ todo }) {
  const deleteTodo = () => {
    const todoRef = Firebase.database().ref('Todo').child(todo.id);
    todoRef.remove();
  };

  const updateTodo = () => {
    const todoRef = Firebase.database().ref('Todo').child(todo.id);
    todoRef.update({
      complete: !todo.complete,
    });
  };

  return (
    <div>
      <h1 className={todo.complete ? 'complete' : ''}>{todo.title}</h1>
      <button onClick={deleteTodo}>Delete</button>
      <button onClick={updateTodo}>Update</button>
    </div>
  );
}
