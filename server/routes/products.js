const express = require('express');
const router = express.Router();

// Importer modeller og annen logikk her, for eksempel:
// const Product = require('../models/Product');

// Eksempelrute: Hente alle produkter
router.get('/', async (req, res) => {
  try {
    // Hent produkter fra databasen
    // const products = await Product.find();
    // res.json(products);
    res.json([{ name: 'Sample Product 1' }, { name: 'Sample Product 2' }]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Legg til flere ruter her, for eksempel POST, PUT, DELETE

module.exports = router;
