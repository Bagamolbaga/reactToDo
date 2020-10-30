import React, { useState } from 'react'
import Context from './context'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import './app.css'

function App() {

  let [todos, setTodos] = useState([])

  let [inputState, setInputState] = useState('')


  function todoCompleted(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  function todoDelete(id){
    setTodos(
      todos.filter(todo => { return todo.id !== id })
    )
  }

  function createTask(taskName){
    setTodos(todos.concat([
      {
      taskName,
      id: todos.length + 1,
      completed: false
      }
  ]))
  setInputState('')
  }

  return (
    <Context.Provider value={{todoCompleted, todoDelete, setInputState, createTask}}>
      <div className="container">
        <TodoInput inputState={inputState} />
        <TodoList todos={todos} />
      </div>
    </Context.Provider>

  );
}

export default App;
