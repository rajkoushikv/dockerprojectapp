const express = require('express');
const handlebars = require('handlebars');
const fs = require('fs');

const app = express();
const port = 3000;

const customers = require('./valorantdb.json');

// Compile the Handlebars.js template files
const customerSource = fs.readFileSync('customer.html', 'utf8');
const customerTemplate = handlebars.compile(customerSource);

const customersSource = fs.readFileSync('customers.html', 'utf8');
const customersTemplate = handlebars.compile(customersSource);

const ordersSource = fs.readFileSync('orders.html', 'utf8');
const ordersTemplate = handlebars.compile(ordersSource);

const orderSource = fs.readFileSync('order.html', 'utf8');
const orderTemplate = handlebars.compile(orderSource);

// Route to render the customers
app.get('/', (req, res) => {
    res.redirect('/customers');
   });

// Route to get all customers
app.get('/customers', (req, res) => {
  const data = {
    customers: customers.customers
  };
  if (req.query.format === 'json') {
    res.json(data.customers);
  } else {
    const html = customersTemplate(data);
    res.send(html);
  }
});

// Route to get a specific customer by ID
app.get('/customers/:id', (req, res) => {
  const customerId = Number(req.params.id);
  const customer = customers.customers.find(c => c.customer_id === customerId);
  if (customer) {
    const data = {
      customer: customer
    };
    if (req.query.format === 'json') {
      res.json(data.customer);
    } else {
      const html = customerTemplate(data);
      res.send(html);
    }
  } else {
    res.status(404).send('Customer not found');
  }
});

// Route to get all orders for a specific customer by ID
app.get('/customers/:id/orders', (req, res) => {
  const customerId = Number(req.params.id);
  const customer = customers.customers.find(c => c.customer_id === customerId);
  if (customer) {
    const data = {
      customer: customer,
      orders: customer.orders
    };
    if (req.query.format === 'json') {
      res.json(data.orders);
    } else {
      const html = ordersTemplate(data);
      res.send(html);
    }
  } else {
    res.status(404).send('Customer not found');
  }
});

// Route to get a specific order by customer ID and order ID
app.get('/customers/:customerId/orders/:orderId', (req, res) => {
  const customerId = Number(req.params.customerId);
  const orderId = Number(req.params.orderId);
  const customer = customers.customers.find(c => c.customer_id === customerId);
  if (customer) {
    const order = customer.orders.find(o => o.order_id === orderId);
    if (order) {
      const data = {
        customer: customer,
        order: order
      };
      if (req.query.format === 'json') {
        res.json(data.order);
      } else {
        const html = orderTemplate(data);
        res.send(html);
      }
    } else {
      res.status(404).send('Order not found');
    }
  } else {
    res.status(404).send('Customer not found');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
