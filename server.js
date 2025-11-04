require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// sert les fichiers statiques depuis la racine du repo
app.use(express.static(path.join(__dirname)));

app.get('/health', (_req, res) => res.json({ ok: true }));

// page d'accueil
app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// fallback éventuel pour routes front
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server on ${PORT}`));
