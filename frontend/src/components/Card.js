import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
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
    }).then(res => {
      alert('Item has been added to cart')
    })
  } else {
    alert('Please log in or register first')
  }
}

const Card = ({ item }) => {
  const history = useHistory()

  return (
    <div className='card' onClick={() => history.push(`/products/${item.item_id}`)}>
      <div className='cover'>
        <img src={item.image} alt='product' className='card-image' />
      </div>

      <div className='body'>
        <h3 className='title'>{item.name}</h3>
        <h3>
          <span className='price'>${item.price}</span>
        </h3> 
        <Button onClick={e => addToCart(e, item.item_id)}>
          Add To Cart
        </Button>
      </div>
    </div>
  )
}

export default Card
