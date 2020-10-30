import React from 'react'
import './styleComponents/TodoItem.css'

export default function TodoItem({todo}){

    return(
        <div className={'todoitem ' + (todo.completed ? 'itemCompleted' : 'itemNoCompleted')} >
            <div>
                <p><span className='id'>{todo.id}</span> {todo.taskName}</p>
            </div>
            <div>
                <p><span className='ok'>OK</span> <span className='delete'>Delete</span></p>
            </div>
        </div>
    )
}