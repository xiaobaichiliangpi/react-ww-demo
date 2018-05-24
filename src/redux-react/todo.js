import React from 'react'

const todo = ({text, completed, onClick}) => {
  return (
    <li className="todo" style={{textDecoration: completed ? 'line-through' : 'none'}}
      onClick={onClick}>
        {text}
    </li>
  )
}

export default todo;