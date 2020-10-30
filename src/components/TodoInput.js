import React, {useContext} from 'react'
import Context from '../context'
import './styleComponents/TodoInput.css'



export default function TodoInput({inputState}){

    const {setInputState, createTask} = useContext(Context)

    function inputSubmit(e){
        e.preventDefault()
        if (inputState.trim()) {
          createTask(inputState)
        }
      }

    function pressEnter(){
        if (inputState.trim()) {
            createTask(inputState)
        } 
    }

   

    return(
        <div className='inputBlock'>
            <input className='input' type='text' value={inputState} 
                onChange={e => setInputState(e.target.value)}
                onKeyPress={e => {if (e.key === 'Enter') {pressEnter()}}}
                >
            </input>
            <button type='submit' className='btn' onClick={inputSubmit}>Add task</button>
        </div>
    )
}