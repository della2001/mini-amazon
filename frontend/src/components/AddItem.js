import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = { product_url: '', product_name: '', category:'', price: '', image_url: '', decription: '', brand:'', seller_name: ''};
    this.handleChange= this.handleChange.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this); 
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = (event) => {
    var url = '/login/' + this.state.username + '/' + this.state.password;
    console.log(this.state);
    fetch(url).then(function(response) {
        console.log(response);
        return response.json();
      })
      .then(data =>  {
        console.log(data);
        this.setState({
        name: data.name, 
        id: data.user_id, 
        submitted: true,
        });
        return data;
    })
    
    event.preventDefault();
  }



  render() {
    const { product_url, product_name, category, price, image_url, description, brand, seller_name} = this.state;

    return (
      <div>
          <div>
                    <h5>Fill out this form to have your item added to the site.</h5>
                    <p></p>
                </div>
            
        <form onSubmit={this.handleSubmit}>
            <input type="text" value={seller_name} name='seller_name' onChange={this.handleChange} placeholder="Seller Name"/><br></br>
            <input type="text" value={product_url} name='product_url' onChange={this.handleChange} placeholder="Product URL"/><br></br>
            <input type="text" value={product_name} name='product_name' onChange={this.handleChange} placeholder="Product Name"/><br></br>
            <input type="text" value={category} name='category' onChange={this.handleChange} placeholder="Category"/><br></br>
            <input type="text" value={price} name='price' onChange={this.handleChange} placeholder="Price"/><br></br>
            <input type="text" value={image_url} name='image_url' onChange={this.handleChange} placeholder="Image URL"/><br></br>
            <input type="text" value={description} name='description' onChange={this.handleChange} placeholder="Item Description"/><br></br>
            <input type="text" value={brand} name='brand' onChange={this.handleChange} placeholder="Item Brand"/><br></br>
            <input type="submit" onclick="clicked(event)" />
        </form>
        <br></br>
        {this.state.submitted !== undefined &&
          <div>Your item has been successfully added to the site!</div>
        }
      </div>
      
    );
  }
}

export default AddItem;