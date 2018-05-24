import React from 'react'
import './search.css'


export default function SearchHead(props) {
  return <div className="search-content">
          <input type="text" placeholder="...search" onInput={props.onChange} value={props.value} />
          <input type="checkbox" onChange={props.onChange} checked={props.check} />check
         </div>
}