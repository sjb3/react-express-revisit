import React, { Component } from 'react';
import './customers.css';

class Customers extends Component {

  constructor() {
    super();
    this.state = {
      customers: [] // this will get filled by backend customers
    }
  }

  componentDidMount() {
    fetch('./api/customers') //no need to add all the http stuff as this will get attached to the proxy in package.json
      .then(res => res.json()) //will feed the data
      .then(customers => this.setState({customers}, () => console.log('Customers fetched! ', customers)
    )); // ES5> customers: customer
  }

  render() {
    return (
      <div>
        <h2>Customer</h2>
          <ul>
            {this.state.customers.map(customer =>
              <li key={customer.id}>{customer.firstName} {customer.lastName}</li>
            )}
          </ul>
      </div>
    );
  }
}

export default Customers;
