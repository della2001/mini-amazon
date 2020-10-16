import React from 'react';
import Button from 'react-bootstrap/Button'

const ProductDetails = (props) => {
    return (
        <div>
            <img src={props.card.imgUrl} className="card-image-details" />
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
        </div>

    );
}
 
export default ProductDetails
