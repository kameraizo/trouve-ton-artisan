const Categorie = require('./Categorie');
const Specialite = require('./Specialite');
const Artisan = require('./Artisan');

// Associations
Categorie.hasMany(Specialite, { foreignKey: 'id_categorie' });
Specialite.belongsTo(Categorie, { foreignKey: 'id_categorie' });

Specialite.hasMany(Artisan, { foreignKey: 'id_specialite' });
Artisan.belongsTo(Specialite, { foreignKey: 'id_specialite' });

module.exports = { Categorie, Specialite, Artisan };