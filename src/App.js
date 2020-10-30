import React from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import './app.css'

function App() {
  let todos = [
    {id: 1, completed: true, taskName: 'Create todo input'},
    {id: 2, completed: false, taskName: 'Create todo list'},
    {id: 3, completed: false, taskName: 'Create todo item'}
  ]



  return (
    <div className="container">
      <TodoInput />
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
