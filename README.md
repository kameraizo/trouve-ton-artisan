# Trouve ton artisan !

Site web créé dans le cadre de ma formation développeur web au CEF.
Il permet aux habitants de la région Auvergne-Rhône-Alpes de trouver un artisan et de le contacter.

# Liens

- Site : https://trouve-ton-artisan-front-a7up.onrender.com
- API : https://trouve-ton-artisan-api-8scx.onrender.com

# Technologies utilisées

- React + Bootstrap + Sass pour le front
- Node.js + Express + Sequelize pour l'API
- MySQL pour la base de données

# Prérequis

- Node.js installé
- MySQL installé

# Installation et lancement

# Base de données
Exécuter dans cet ordre dans MySQL :
1. database/create_db.sql
2. database/seed_db.sql

# API
cd api
npm install

Copier .env.example en .env et remplir les valeurs, puis :

node app.js


# Front
cd front
npm install

Créer un fichier .env avec :

VITE_API_URL=http://localhost:3000/api
VITE_API_KEY=ta_cle_api

Puis :
npm run dev
