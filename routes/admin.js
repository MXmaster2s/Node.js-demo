const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.render('add-product', {   //express renders the template using this .render method
    pageTitle: 'Add Product', 
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
 });
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({ 
    title: req.body.title 
  });
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
