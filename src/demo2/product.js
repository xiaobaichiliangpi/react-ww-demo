import React from 'react'

export default function Product(props) {
  const calc = (item, index) => {
    if (item) {
      return <div className="product-item" key={index}>
              <label className="product-item-label">{item && item.name}</label>
              <span className="product-item-price">{item && item.price}</span>
            </div>  
    }
  }

  return <div className="product">
          <h3 className="product-title">{props.title}</h3>
          {props.product.map((item, index) => 
            {return calc(item, index)}
          )}
         </div>
}