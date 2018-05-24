import React from 'react'

const Link = ({active, children, onClick}) => {
  console.log(active, children)
  if (active) {
    return <span>{children}</span>
  }
  return <span onClick={(e) => {
    e.preventDefault()
    onClick()
  }}>{children}</span>
}

export default Link;