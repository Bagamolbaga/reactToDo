import React, {useContext} from 'react'
import Context from '../context'
import './styleComponents/TodoItem.css'

export default function TodoItem({todo}){
    const {todoCompleted, todoDelete} = useContext(Context)

    return(
        <div className={'todoitem ' + (todo.completed ? 'itemCompleted' : 'itemNoCompleted')} >
            <div>
                <p><span className='id'>{todo.id}</span> {todo.taskName}</p>
            </div>
            <div>
                <p><span className='ok' onClick={() => todoCompleted(todo.id)} >OK</span> <span className='delete' onClick={() => todoDelete(todo.id)}>Delete</span></p>
            </div>
        </div>
    )
}