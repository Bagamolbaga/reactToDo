import React, { useState, useEffect } from 'react'
import Context from './context'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import './app.css'

function App() {

  let [todos, setTodos] = useState([])

  let [inputState, setInputState] = useState('')

  useEffect(() => {
    let todosInLocalStorage = localStorage.getItem('todos') || []
    setTodos(JSON.parse(todosInLocalStorage))
  },[])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


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
      description: null,
      id: todos.length + 1,
      completed: false,
      descShow: false
      }
    ]))
    setInputState('')
  }

  function addRemDesc(id){
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.descShow = !todo.descShow
        }
        return todo
      })
    )
  }

  function createDescTask(id, desc){
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.description = desc
        }
        return todo
      })
    )
  }

  

  return (
    <Context.Provider value={{todoCompleted, todoDelete, setInputState, createTask, addRemDesc, createDescTask}}>
      <div className="container">
        <TodoInput inputState={inputState} />
        <TodoList todos={todos} />
      </div>
    </Context.Provider>

  );
}

export default App;
