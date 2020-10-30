import React from 'react'
import './styleComponents/TodoInput.css'


export default function TodoInput(){
    return(
        <div className='inputBlock'>
            <input className='input' type='text'></input>
            <button className='btn'>Add task</button>
        </div>
    )
}