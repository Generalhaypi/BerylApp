require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/health', (_req, res) => res.json({ ok: true }));

app.post('/chat', async (req, res) => {
  res.json({ reply: 'Serveur connecté avec succès à Firebase 🔥' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Serveur démarré sur le port ${PORT}`));
