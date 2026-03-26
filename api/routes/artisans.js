const express = require('express');
const router = express.Router();
const { Artisan, Specialite, Categorie } = require('../models/index');
const { Op } = require('sequelize');

// GET tous les artisans
router.get('/', async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      include: {
        model: Specialite,
        include: Categorie
      }
    });
    res.json(artisans);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', error: err });
  }
});

// GET les 3 artisans du mois (top)
router.get('/top', async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      where: { top: true },
      include: {
        model: Specialite,
        include: Categorie
      }
    });
    res.json(artisans);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', error: err });
  }
});

// GET artisans par catégorie
router.get('/categorie/:id', async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      include: {
        model: Specialite,
        where: { id_categorie: req.params.id },
        include: Categorie
      }
    });
    res.json(artisans);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', error: err });
  }
});

// GET recherche par nom
router.get('/search', async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      where: {
        nom: { [Op.like]: `%${req.query.q}%` }
      },
      include: {
        model: Specialite,
        include: Categorie
      }
    });
    res.json(artisans);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', error: err });
  }
});

// GET un artisan par id
router.get('/:id', async (req, res) => {
  try {
    const artisan = await Artisan.findByPk(req.params.id, {
      include: {
        model: Specialite,
        include: Categorie
      }
    });
    if (!artisan) return res.status(404).json({ message: 'Artisan non trouvé' });
    res.json(artisan);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', error: err });
  }
});

module.exports = router;