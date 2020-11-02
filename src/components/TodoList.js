import React from 'react'
import TodoItem from './TodoItem'
import './styleComponents/TodoList.css'

export default function TodoList(props){
    
    return(
        <div className='todoListBlock'>
                {props.todos.map(todo => {return <TodoItem todo={todo} key={todo.id} />})}
        </div>
    )
}