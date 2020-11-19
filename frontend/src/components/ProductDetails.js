import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import api from '../api'
import '../Main.css'

const addToCart = item_id => {
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

const ProductDetails = () => {
  const { id } = useParams()
  const [details, setDetails] = useState(null)

  useEffect(() => {
    api.get(`/items/${id}`)
      .then(res => {
        console.log(res.data)
        setDetails(res.data)
      })
  }, [])

  if (!details) return <div>Loading...</div>

  return (
    <div className='productdetails'>
      <Row>
        <Col>
          <img src={details.image} className='card-image-details' />
        </Col>
        <Col>
          <h3>{details.name}</h3>
          <h3><span className='price'> ${details.price}</span></h3> 
          <p>{details.description}</p>
          <div>
            <Button onClick={() => addToCart(details.item_id)}>Add To Cart</Button>
          </div>
        </Col>
      </Row>
    </div>
  )
}
 
export default ProductDetails
