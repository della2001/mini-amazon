import React, { useState, useEffect } from 'react'
import { Link, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from './Card'
import { api } from './api'

const Cart = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [items, setItems] = useState([])
  
  useEffect(() => {
    fetch('/items/small')
    .then(res => res.json())
    .then(items => {const itemsData = items
      fetch('/cart/1')
      .then(resp => resp.json())
      .then(items2 => {
        const cartItems = []
        items2.forEach(item => {
          const index = cartItems.findIndex(i => i.item_id === item.item_id)
          if (index !== -1) cartItems[index].count += 1
          else cartItems.push({
            item_id: item.item_id,
            ...itemsData.find(i => i.item_id === item.item_id),
            count: 1 })
        })
        // console.log(cartItems)
        setItems(cartItems)
        setIsLoading(false)
      
      })
      
    /*api.get('items/small').then(res => {
      const itemsData = res.data
      api.get('cart/1')
        .then(res => {
          const cartItems = []
          res.data.forEach(item => {
            const index = cartItems.findIndex(i => i.item_id === item.item_id)
            if (index !== -1) cartItems[index].count += 1
            else cartItems.push({
              item_id: item.item_id,
              ...itemsData.find(i => i.item_id === item.item_id),
              count: 1 })
          })
          // console.log(cartItems)
          setItems(cartItems)
          setIsLoading(false)
        })*/
        
    })
  }, [])
  
  if (isLoading) return <div>Loading...</div>

  if (items.length === 0) return <div className="cart cart-header">Cart is empty</div>

  return (
    <div>
      <div className="cart cart-header">You have {items.length} items in the cart{" "}</div>

      <Container>
        <Row>
          {items.map(item => (
            <Card key={item.item_id} item={item} />
          ))}
        </Row>
      </Container>
      <div>
        <p><Link to={{ pathname: '/checkout'}}>Check Out</Link></p>
                </div>
    
    </div>
  )
}

export default Cart