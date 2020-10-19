import React from 'react';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../Main.css'
const ProductDetails = (props) => {
    return (
        <div className="productdetails">
            <Row>

                <Col>
                    <img src={props.card.image} className="card-image-details" />
                </Col>
                <Col>
                    <h3>{props.card.name}</h3>
                    <h3><span className="price"> ${props.card.price}</span></h3> 
                    <p>{props.card.description}</p>
                    {/*
            <div className="card">
                <div className="front">
                    <img src={props.card.imgUrl} className="card-image" />
                    <div className="container">
                    <h3>{props.card.name}</h3>
                    <h3><span className="price"> ${props.card.price}</span></h3> 
                    <p>{props.card.description}</p>
                    </div>
                </div>
            </div>
                    */}
                    <div>
                        <Button>Add To Cart</Button>
                    </div>
            </Col>
        </Row>

        </div>

    );
}
 
export default ProductDetails
