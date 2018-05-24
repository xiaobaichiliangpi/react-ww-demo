import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './game'
import Search from './demo2'
import Demo from './demo3'
import Demo4 from './demo4'
import Demo41 from './demo4/forwardRef'
import Demo5 from './demo5'
import Redux from './demo-redux'
import VisibleTodoList from './redux-react/container/visibileTodoList'
import AddTodo from './redux-react/container/addTodo'
import Footer from './redux-react/container/footer'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './demo-redux/reducers'


class App extends Component {
  constructor(props) {
    super(props)
    this.inputRef = null
    this.store = createStore(reducers)
    this.state = {
      value: 1
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code onClick={this.onClick}>src/App.js</code> and save to reload.
        </p>
        <p>Demo1</p>
        <Game></Game>
        <p>Demo2</p>
        <Search></Search>
        <p>Demo3</p>
        <Demo></Demo>
        <p onClick={this.handleDemo4.bind(this)}>Demo4</p>
        <Demo4 value={this.state.value} ref={(input) => this.inputRef = input}></Demo4>
        <p onClick={this.handleDemo41.bind(this)}>Demo4(1)</p>
        <Demo41 value={this.state.value} ref={(input) => this.inputRef1 = input}></Demo41>
        <p>Demo5</p>
        <Demo5></Demo5>
        <p>REDUX</p>
        <Redux></Redux>
        <Provider store={this.store}>
          <div style={{border: '1px solid #eee', margin: '20px 0'}}>
            <AddTodo></AddTodo>
            <VisibleTodoList test="123"></VisibleTodoList>
            <Footer></Footer>
          </div>
        </Provider>
      </div>
    );
  }

  // onClick = () => {
  //   console.log(this)
  // }

  onClick () {
    console.log(this)
  }
  handleDemo4 () {
    this.setState({
      value: 3
    })
    console.log(this.inputRef)
    this.inputRef.focus()
  }
  handleDemo41 () {
    this.setState({
      value: 4
    })
    console.log(this.inputRef1)
    this.inputRef1.focus()
  }

}

export default App;
