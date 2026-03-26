const express = require('express');
const sequelize = require('./config/database');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());

// Test connexion BDD
sequelize.authenticate()
  .then(() => console.log('Connexion MySQL réussie !'))
  .catch(err => console.error('Erreur de connexion :', err));

// Lancement du serveur
app.listen(process.env.PORT, () => {
  console.log(`Serveur démarré sur le port ${process.env.PORT}`);
});