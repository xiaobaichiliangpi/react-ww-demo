import {combineReducers} from 'redux'
// const initState = {
//   todos: [],
//   visibilityFilter: 'SHOW_ALL'
// }


const toDo = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
    return [
      ...state,
      {
        text: action.text,
        completed: false
      }
    ]
    case 'TOGGLE_TODO': 
    return  state.map((val, index) => {
      if (index === action.index) {
        return Object.assign({}, val, {
          completed: !val.completed
        })
      } else {
        return val
      }
    })
    default: return state
  }
}

const filter = (state='SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
    return action.filter
    default: return state
  }
}

const reducers = combineReducers({
  todos: toDo,
  visibilityFilter: filter
})

export default reducers;


// {
//   visibilityFilter: 'SHOW_ALL',
//   todos: [
//     {
//       text: 'Consider using Redux',
//       completed: true,
//     },
//     {
//       text: 'Keep all state in a single tree',
//       completed: false
//     }
//   ]
// }