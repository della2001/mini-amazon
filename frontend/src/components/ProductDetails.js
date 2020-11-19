import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import Button from 'react-bootstrap/Button'
import api from '../api'
import '../Main.css'

const addToCart = item_id => {
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

const ProductDetails = () => {
  const { id } = useParams()
  const [details, setDetails] = useState(null)

  useEffect(() => {
    api.get(`/items/${id}`)
      .then(res => {
        setDetails(res.data)
      })
  }, [])

  if (!details) return <div>Loading...</div>

  return (
    <div className='product-details'>
      <div>
        <img src={details.image} className='card-image-details' />
        <Button onClick={() => addToCart(details.item_id)}>Add To Cart</Button>
      </div>
      <div>
        <h3>{details.name}</h3>
        <h3><span className='price'> ${details.price}</span></h3> 
        <p>{details.description}</p>
      </div>
    </div>
  )
}
 
export default ProductDetails
