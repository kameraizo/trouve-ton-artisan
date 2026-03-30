import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

const api = axios.create({
  baseURL: API_URL,
    headers: {
    'x-api-key': import.meta.env.VITE_API_KEY
  }
});

// Récupérer toutes les catégories
export const getCategories = () => api.get('/categories');

// Récupérer tous les artisans
export const getArtisans = () => api.get('/artisans');

// Récupérer les artisans du mois
export const getArtisansTop = () => api.get('/artisans/top');

// Récupérer les artisans par catégorie
export const getArtisansByCategorie = (id) => api.get(`/artisans/categorie/${id}`);

// Récupérer un artisan par id
export const getArtisan = (id) => api.get(`/artisans/${id}`);

// Rechercher un artisan par nom
export const searchArtisans = (q) => api.get(`/artisans/search?q=${q}`);

// Envoyer un email
export const sendEmail = (data) => api.post('/email', data);