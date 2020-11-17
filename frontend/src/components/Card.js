import React from 'react'
import { Link } from 'react-router-dom'
import api from '../api'
import './Card.css'

const Card = ({ item }) => {

  const addToCart = item_id => {
    api
      .post('cart', {
        item_id,
        user_id: 1,
        count: 1
      })
      .then(res => console.log(res.data))
  }

  return (
    <div className='card'>
        <div className='front'>
        <Link to={`/product/${item.item_id}`}>
          <img src={item.image} className='card-image' />
        </Link>
          <div className='container'>
            <h3>
              <Link to={`/product/${item.item_id}`}>
                <span className='cardtitle'>{item.name}</span>
              </Link>
            </h3>
            <h3>
              <span className='price'> ${item.price}</span>
            </h3> 
            <br></br>
            {item.count ? (
              <span>Unit in cart: {item.count}</span>
            ) : (
              <button
                onClick={() => addToCart(item.item_id)}
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
