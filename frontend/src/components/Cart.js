import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import api from '../api'

const Cart = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [items, setItems] = useState([])
  
  const user_id = localStorage.getItem('uid')

  useEffect(() => {
    if (!user_id) return
    api.get('items/small').then(res => {
      const itemsData = res.data
      api.get(`cart/${user_id}`)
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
          setItems(cartItems)
          setIsLoading(false)
        })
    })
  }, [user_id])

  const getTotalCount = (items) => items.reduce((acc, cur) => acc + cur.count, 0)

  const getTotalCost = (items) => parseFloat(items.reduce((acc, cur) => acc + cur.price * cur.count, 0)).toFixed(2)

  if (!user_id) return (
    <div>You need to <a href='/login'>log in</a> to view the cart.</div>
  )
  
  if (isLoading) return <div>Loading...</div>

  if (items.length === 0) return <div className="cart cart-header">Cart is empty</div>

  return (
    <div>
      <div className='cart-table'>
        <Table striped>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Count</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.item_id}>
                <td><img src={item.image} alt='product' className='card-image' /></td>
                <td>
                  <h3>
                    <Link to={`/product/${item.item_id}`}>
                      <span className='cardtitle'>{item.name}</span>
                    </Link>
                  </h3>
                </td>
                <td>{item.count}</td>
                <td>${parseFloat(item.count * item.price).toFixed(2)}</td>
              </tr>
            ))}
            <tr>
              <td colSpan='2'></td>
              <td><strong>{getTotalCount(items)}</strong></td>
              <td><strong>${getTotalCost(items)}</strong></td>
            </tr>
            <tr>
              {/* <td colSpan='4'><Button>Checkout</Button></td> */}
              <td colSpan='3'></td>
              <td><Button>Checkout</Button></td>
            </tr>
          </tbody>
        </Table>
      </div>
      {/* <Button>Checkout</Button> */}
    </div>
  )
}

export default Cart