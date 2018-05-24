import React from 'react'

export default function Square(props) {
  return <button className="square-btn" onClick={props.onClick}>{props.value}</button>
}
