const express = require('express');     // Framework Express
const cors = require('cors');           // Middleware CORS
const sequelize = require('./config/database');      // Connexion BDD
require('dotenv').config();                   // Variables d'environnement
const verifyApiKey = require('./middleware/auth');

// Import des routes
const categoriesRouter = require('./routes/categories');
const artisansRouter = require('./routes/artisans');
const emailRouter = require('./routes/email');

// Import des modèles
require('./models/index');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(verifyApiKey);

// Routes
app.use('/api/categories', categoriesRouter);
app.use('/api/artisans', artisansRouter);
app.use('/api/email', emailRouter);

// Lancement du serveur + test connexion BDD
sequelize.authenticate()
  .then(() => {
    console.log('Connexion MySQL réussie !');
    app.listen(process.env.PORT, () => {
      console.log(`Serveur démarré sur le port ${process.env.PORT}`);
    });
  })
  .catch(err => {                                     // Gestion des erreurs
    console.error('Erreur de connexion :', err);    // Affichage de l'erreur
  });