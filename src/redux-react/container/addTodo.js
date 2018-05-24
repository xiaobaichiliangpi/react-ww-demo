import React from 'react'
import {addTodo} from '../../demo-redux/actions'
import {connect} from 'react-redux'

let AddTodo = ({dispatch}) => {
  let input
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          console.log('ref', input.value)
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input type="text" ref={(ref) => input = ref} />
        <button type="submit">addTodo</button>
      </form>
    </div>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo;