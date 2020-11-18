
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from './Card'

const Home = ({ items }) => {
  return (
    <div>
      <br></br>
      <div>
        <Container>
          <Row>
            {items.map((item) => (
              <Card key={item.item_id} item={item}/>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  )
}
 
export default Home