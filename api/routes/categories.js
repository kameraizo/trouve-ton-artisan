const express = require('express');   // Framework Express
const router = express.Router();      // Routeur Express
const { Categorie } = require('../models/index');     // Modèle Categorie

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