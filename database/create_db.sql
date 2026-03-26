USE trouve_ton_artisan;

CREATE TABLE categorie (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nom VARCHAR(100) NOT NULL
);

CREATE TABLE specialite (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nom VARCHAR(100) NOT NULL,
  id_categorie INT NOT NULL,
  FOREIGN KEY (id_categorie) REFERENCES categorie(id)
);

CREATE TABLE artisan (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nom VARCHAR(255) NOT NULL,
  note DECIMAL(2,1) NOT NULL,
  ville VARCHAR(100) NOT NULL,
  a_propos TEXT,
  email VARCHAR(255) NOT NULL,
  site_web VARCHAR(255) NULL,
  top BOOLEAN DEFAULT FALSE,
  id_specialite INT NOT NULL,
  FOREIGN KEY (id_specialite) REFERENCES specialite(id)
);