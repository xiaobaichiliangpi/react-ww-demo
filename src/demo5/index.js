import { createStore } from 'redux';
import React from 'react'

const reducer = (state = {a: 0}, action) => {
  console.log(2222, state, action)
  switch (action.type) {
    case 'INCREMENT':
      return {
        a: state.a + 1
      };
    case 'DECREMENT':
      return {
        a: state.a - 1
      };
    default: return state
  }
}

const store = createStore(reducer)

function Counter(props) {
  return (
    <div>
      <span>{props.value}</span>
      <button onClick={props.onIncrement}>+</button>
      <button onClick={props.onDecrement}>-</button>
    </div>
  )
}

class ReduxDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: store.getState().a
    }
    store.subscribe(this.updateState.bind(this))
  }

  updateState () {
    this.setState({
      value: store.getState().a
    })
  }

  render () {
    return (
      <Counter value={this.state.value}
        onIncrement={() => store.dispatch({type: 'INCREMENT'})}
        onDecrement={() => store.dispatch({type: 'DECREMENT'})} />
    )
  }
}

export default ReduxDemo;
