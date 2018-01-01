'use strict';

const express = require('express');
const app = express();

const port= 5000;

app.listen(port, () => {
  console.log(`Server running at port :  ${port}`)
});

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 1, firstName: 'Mary', lastName: 'Rae'},
    {id: 1, firstName: 'Wilson', lastName: 'Mi'}
  ];

  res.json(customers);

});

