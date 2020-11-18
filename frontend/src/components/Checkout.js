import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = { cardname: '', cardnumber: '', expdate:'', cvv: '', buyername: '', email: '', address: '', city: '', zip:'', state:''};
    this.handleChange= this.handleChange.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this); 
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({[name]: value});
  }

  handleSubmit = (event) => {
    console.log(JSON.stringify(this.state));
    fetch('/checkout/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state)
        }
    ).then(function(response) {
        console.log(response);
        return response.json();
      })
      .then(data =>  {this.setState({
        name: data.name, 
        id: data.user_id, 
        submitted: true
      })});
    event.preventDefault();

}



  render() {
    const {cardname, cardnumber, expdate, cvv, buyername, email, address, city, zip, state} = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <div>
                    <h5>Payment</h5>
                    <p></p>
                </div>
            <input type="text" value={cardname} name='cardname' onChange={this.handleChange} placeholder="Name of Cardholder"/><br></br>
            <input type="text" value={cardnumber} name='cardnumber' onChange={this.handleChange} placeholder="Card Number"/><br></br>
            <input type="text" value={expdate} name='expdate' onChange={this.handleChange} placeholder="Expiration Date"/><br></br>
            <input type="text" value={cvv} name='cvv' onChange={this.handleChange} placeholder="CVV"/><br></br>
            <div>
                    <h5>Shipping Address</h5>
                    <p></p>
                </div>
            <input type="text" value={buyername} name='buyername' onChange={this.handleChange} placeholder="Full Name"/><br></br>
            <input type="text" value={email} name='email' onChange={this.handleChange} placeholder="Email Address"/><br></br>
            <input type="text" value={address} name='address' onChange={this.handleChange} placeholder="Shipping Address"/><br></br>
            <input type="text" value={city} name='city' onChange={this.handleChange} placeholder="City"/><br></br>
            <input type="text" value={zip} name='zip' onChange={this.handleChange} placeholder="Zipcode"/><br></br>
            <input type="text" value={state} name='state' onChange={this.handleChange} placeholder="State"/><br></br>
            <div>
                <p><Link to={{ pathname: '/ordercomplete'}}>Place Order</Link></p>
                </div>
        </form>
        <br></br>
        {this.state.id !== undefined &&
          <div>Registration successful! Welcome Click <Link to="/">here</Link> to start browsing!</div>
        }
      </div>
      
    );
  }
}

export default Checkout;