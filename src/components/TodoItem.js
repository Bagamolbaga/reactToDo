import React, {useContext} from 'react'
import Context from '../context'
import './styleComponents/TodoItem.css'

export default function TodoItem({todo}){
    const {todoCompleted, todoDelete, addRemDesc, createDescTask} = useContext(Context)
    
    let [inputDescState, setInputDescState] = React.useState('')

    function pressEnter(){
        if (inputDescState.trim()) {
            createDescTask(todo.id, inputDescState)
        } 
    }

    let inputOrDesc
    if (todo.descShow && todo.description === null) {
        inputOrDesc =   <input value={inputDescState} 
                            onChange={e => setInputDescState(e.target.value)}
                            onKeyPress={e => {if (e.key === 'Enter') {pressEnter()}}}
                        ></input>
    } else if (todo.descShow && todo.description !== null) {
        inputOrDesc = todo.description
    }

    return(
        <React.Fragment>
            <div className={'todoitem ' + (todo.completed ? 'itemCompleted' : 'itemNoCompleted')}>
            
                    <div>
                        <p><span className='id'>{todo.id}</span> {todo.taskName}</p>
                    </div>
                    <div>
                        <p><span className='btn-desc' onClick={() => addRemDesc(todo.id)} >Show/Hide desc</span> 
                            <span className='ok' onClick={() => todoCompleted(todo.id)} >OK</span> 
                            <span className='delete' onClick={() => todoDelete(todo.id)}>Delete</span></p>
                    </div>
            </div>
            <div className="desc">
                <p>
                    {inputOrDesc}
                </p>
            </div>
        </React.Fragment>
    )
}