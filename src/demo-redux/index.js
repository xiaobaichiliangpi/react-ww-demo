import { createStore } from 'redux'
import React from 'react'
import reducers from './reducers'
import {addTodo, ToggleTodo, setVisibilityFilter, VisibilityFilters} from './actions'


class reduxTest extends React.Component {
  constructor(props) {
    super(props)
    // eslint-disable-next-line 
    this.store = createStore(reducers)
    console.log('init redux', this.store.getState())
    this.listeners = undefined
  }
  
  render () {
    return <div className="redux">
      <button onClick={this.onAddTodo.bind(this)}>Add</button>
      <button onClick={this.onToogleTodo.bind(this)}>Toogle</button>
      <button onClick={this.onFilter.bind(this)}>Filter</button>
      <input type="checkbox" onChange={this.onSubscrip.bind(this)} />
    </div>
  }
  onAddTodo () {
    this.store.dispatch(addTodo('addtodo'))
    console.log('clg', this.store.getState())
  }
  onToogleTodo () {
    this.store.dispatch(ToggleTodo(0))
    console.log('clg', this.store.getState())
  }
  onFilter () {
    this.store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
    console.log('clg', this.store.getState())
  }
  onSubscrip (e) {
    const checked = e.target.checked
    if (checked) {
      (this.listeners = this.store.subscribe(() => console.log('sub', this.store.getState())))
      console.log('subscribe', this.listeners)
    } else {
      this.listeners && this.listeners()
      console.log('unsubscribe', this.listeners)
    }
  }
}

export default reduxTest;
