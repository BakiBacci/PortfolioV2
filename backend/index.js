const fs = require('fs');
process.env.DEBUG = 'express:*';


const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

require('dotenv').config({ path: path.join(__dirname, '../.env') });
console.log("Dossier actuel :", __dirname);
console.log("Chemin résolu :", path.resolve(__dirname, '../.env'));
console.log("Fichier .env existe ?", fs.existsSync(path.resolve(__dirname, '../.env'))); 
console.log("Chemin .env chargé:", path.resolve(__dirname, '../.env'));
console.log("Valeurs .env:", {
  user: process.env.GMAIL_USER,
  pass: process.env.GMAIL_PASS ? "***" : "NON_CHARGÉ"
});

// Middleware
app.use(cors());
app.use(express.json());

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname, "../public")));

// Route API
const contactRouter = require("./contactHandler");
app.use('/api/contact', contactRouter);

// Gestion des autres routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));