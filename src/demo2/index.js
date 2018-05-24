import React, {Component} from 'react'
import Table from './table.js'
import SearchHead from './search.js'
// import './search.css'

export default class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      check: false,
      productList: [
        {
          title: 'fruit',
          product: [
            {
              name: 'apple',
              price: '10/500g',
              isSellOut: false
            },
            {
              name: 'banalala',
              price: '20/500g',
              isSellOut: true
            }
          ],
        },
        {
          title: 'food',
          product: [
            {
              name: 'noddle',
              price: '12',
              isSellOut: false
            },
            {
              name: 'rice',
              price: '22/500g',
              isSellOut: true
            }
          ]
        }
      ]
    }
  }

  render () {
    return <div className="search">
            <div className="search-head">
              <SearchHead value={this.state.value} check={this.state.check} onChange={this.handleChange}></SearchHead>
            </div>
            <div className="search-content">
              <Table {...this.state}></Table>
            </div>
           </div>
  }

  handleChange = (e) => {
    if (e.target.type === 'text') {
      this.setState({
        value: e.target.value
      })
    } else {
      this.setState((preState) => ({
        check: !preState.check
      }))
    }
  }
}