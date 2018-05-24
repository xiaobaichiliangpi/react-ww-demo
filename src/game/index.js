import React, {Component} from 'react'
import Square from '../square'

export default class Game extends Component {
  constructor (props) {
    super(props)
    this.state = {
      array: Array(9).fill(null),
      xInNext: true,
      history: []
    }
  }

  renderSquare (i) {
    return <Square value={this.state.array[i]}
            onClick={() => this.handleClick(i)}></Square>
  }

  render () {
    let status
    const winner = this.calculateWinner(this.state.array)
    if (winner) {
      status = 'winner is' + winner
    } else {
      status = 'next players is ' + (this.state.xInNext ? 'X' : 'O')
    }
    return <div className="table">
      <div className="status">{status}</div>
      <div className="table-row">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
      </div>
      <div className="table-row">
        {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
      </div>
      <div className="table-row">
        {this.renderSquare(6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}
      </div>
    </div>
  }

  handleClick (i) {
    const temp = this.state.array.slice()
    temp[i] = this.state.xInNext ? 'X' : 'O'
    if (this.calculateWinner(this.state.array)) {
      return
    }

    this.setState({
      array: temp,
      xInNext: !this.state.xInNext
    })
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
}