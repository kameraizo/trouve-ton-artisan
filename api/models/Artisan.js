const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Artisan = sequelize.define('Artisan', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nom: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  note: {
    type: DataTypes.DECIMAL(2, 1),
    allowNull: false
  },
  ville: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  a_propos: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  site_web: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  top: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  id_specialite: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'artisan',
  timestamps: false
});

module.exports = Artisan;