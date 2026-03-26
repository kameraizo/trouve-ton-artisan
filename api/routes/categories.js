const express = require('express');
const router = express.Router();
const { Categorie } = require('../models/index');

// GET toutes les catégories
router.get('/', async (req, res) => {
  try {
    const categories = await Categorie.findAll();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', error: err });
  }
});

module.exports = router;