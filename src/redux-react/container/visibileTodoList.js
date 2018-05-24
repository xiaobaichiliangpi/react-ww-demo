import {connect} from 'react-redux'
import {ToggleTodo} from '../../demo-redux/actions'
import TodoList from '../todoList'

const getTodosWithFilters = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(val => {
        return val.completed
      })
    case 'SHOW_ACTIVE':
      return todos.filter(val => {
        return !val.completed
      })
    case 'SHOW_ALL':
    default: return todos;
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('object2', ownProps)
  return {
    todos: getTodosWithFilters(state.todos, state.filter)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log('object', ownProps)
  return {
    onClick: (id) => {
      console.log(id)
      dispatch(ToggleTodo(id))
    }
  }
}

const visibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default visibleTodoList;