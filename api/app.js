const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
require('dotenv').config();

// Import des routes
const categoriesRouter = require('./routes/categories');
const artisansRouter = require('./routes/artisans');

// Import des modèles
require('./models/index');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/categories', categoriesRouter);
app.use('/api/artisans', artisansRouter);

// Lancement du serveur + test connexion BDD
sequelize.authenticate()
  .then(() => {
    console.log('Connexion MySQL réussie !');
    app.listen(process.env.PORT, () => {
      console.log(`Serveur démarré sur le port ${process.env.PORT}`);
    });
  })
  .catch(err => {
    console.error('Erreur de connexion :', err);
  });