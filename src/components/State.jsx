import React from 'react'
import{useState} from 'react'

function State() {
const[count,setCount]=useState(0);

function add() {
    setCount(prevCount=>prevCount + 1)
}

function sub() {
    setCount(prevCount => prevCount - 1)
}

  return (
    <div>
        <button onClick={sub}>-</button>
        <h2>{count}</h2>
        <button onClick={add}>+</button>
    </div>
  )
}

export default State