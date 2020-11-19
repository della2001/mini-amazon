import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from './Card'
import Form from 'react-bootstrap/Form'
// import ButtonGroup from 'react-bootstrap/ButtonGroup'
// import Button from 'react-bootstrap/Button'
import api from '../api'
import '../Main.css'

const Home = () => {
  const [items, setItems] = useState([])
  const [activeSearch, setActiveSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('')
  const [activeSort, setActiveSort] = useState('')

  useEffect(() => {
    api.get('items/small').then(res => {
      setItems(res.data)
    })
  }, [])

  const search = items => !activeSearch ? items : items.filter(item => item.name.toLowerCase().includes(activeSearch.toLowerCase()))

  const filter = items => !activeCategory ? items : items.filter(item => item.category.indexOf(activeCategory) >= 0)

  const sort = items => !activeSort ? items : items.slice().sort((a, b) => {
    if (activeSort === 'lowest') return (a.price > b.price) ? 1 : -1
    if (activeSort === 'highest') return (a.price < b.price) ? 1 : -1
    // default
    return (a.id > b.id) ? 1 : -1
  })

  return (
    <div className='homepage'>
      <div className='filters'>
        <Form value={activeSearch} onChange={e => setActiveSearch(e.target.value)}>
          <Form.Control type='text' placeholder='Search by product name'></Form.Control>
        </Form>
        <div>
          <div style={{ marginRight: 16 }}>
            Product category:&nbsp;&nbsp;
            <select value={activeCategory} onChange={e => setActiveCategory(e.target.value)}>
              <option value=''>All</option>
              <option value='Clothing'>Clothing</option>
              <option value='Footwear'>Footwear</option>
              <option value='Furniture'>Furniture</option>
              <option value='Stationery'>Stationery</option>
              <option value='Pet Supplies'>Pet Supplies</option>
            </select>
          </div>
          <div className='filter-sort'>
            Sort by:&nbsp;&nbsp;
            <select value={activeSort} onChange={e => setActiveSort(e.target.value)}>
              <option value=''>Latest</option>
              <option value='lowest'>Price (Lowest)</option>
              <option value='highest'>Price (Highest)</option>
            </select>
          </div>
        </div>
      </div>
      <br></br>
      <div>
        <Container>
          <Row>
            {search(sort(filter(items))).map((item) => (
              <Card key={item.item_id} item={item}/>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  )
}
 
export default Home
