import Product from './product.js'
import React from 'react'

export default function Table(props) {
  const productList = props.productList.map(val => {
    const product = val.product.map(item => {
      let result
      if (props.value) {
        if (props.check) {
          result = item.isSellOut && filterValue(props.value, item)
        } else {
          result = filterValue(props.value, item)
        }
      } else {
        if (props.check) {
          result = item.isSellOut && item
        } else {
          result = item
        }
      }
      return result
    })
    return {
      title: val.title,
      product: product
    }
  })

  function filterValue (filterText, value){
      let result
      if (value.name.indexOf(filterText) > -1 || value.price.indexOf(filterText) > -1) {
        result = value
      }
      return result
  }

  return <div className="table-wrap">
          <h2 className="table-title">
            <span>Name </span>
            <span>Price</span>
          </h2>
          <div className="table-content">
            { console.log(productList) }
              {productList.map((item, index) => 
              <Product key={index} {...item}></Product>
            )}
          </div>
         </div>
}