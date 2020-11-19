import React from 'react'
import { useHistory } from 'react-router-dom'
import api from '../api'
import './Card.css'

const addToCart = (e, item_id) => {
  e.stopPropagation()
  const user_id = localStorage.getItem('uid')
  if (user_id) {
    api.post('cart', {
      item_id,
      user_id,
      count: 1
    })
  } else {
    alert('Please log in or register first')
  }
}

const Card = ({ item }) => {
  const history = useHistory()

  return (
    <div className='card' onClick={() => history.push(`/products/${item.item_id}`)}>
      <div className='front'>
        <img src={item.image} className='card-image' />
        <div className='container'>
            <a className='cardtitle'>{item.name}</a>
          <h3>
            <span className='price'> ${item.price}</span>
          </h3> 
          <br></br>
          {item.count ? (
            <span>Unit in cart: {item.count}</span>
          ) : (
            <button
              onClick={e => addToCart(e, item.item_id)}
              className='button primary'
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card
