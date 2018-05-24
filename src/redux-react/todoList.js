import React from 'react'
import Todo from './todo'

const todoList = ({todos, onClick}) => {
  return (
    <ul className="todo-list">
      {todos.length ? todos.map((todo, key) => {
        return <Todo key={key} {...todo} onClick={() => onClick(key)}></Todo>
      }) : <li>暂无todo</li>}
    </ul>
  )
}

export default todoList;