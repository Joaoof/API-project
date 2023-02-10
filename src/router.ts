// * Caso de uso que nós iremos ter

import { Router } from 'express';

export const router = Router();

// List categories
router.get('/categories', (req, res) => {
  res.send('Ok');
});

// Create category
router.post('/categories', (req, res) => {
  res.send('Ok');
});

// List products
router.get('/products', (req, res) => {
  res.send('Ok');
});

// Create product
router.post('/products', (req, res) => {
  res.send('Ok');
});

// Get products by category
router.get('/categories/:categoryId/products', (req, res) => {
  res.send('Ok');
});

// List orders
router.get('/orders', (req, res) => {
  res.send('Ok');
});

// Create order
router.post('/products', (req, res) => {
  res.send('Ok');
});

// Change order status
router.patch('/orders/:orderId', (req, res) => {
  res.send('OK');
});

// Delete/cancel order
router.delete('/orders/:orderId', (req, res) => {
  res.send('OK');
});
