const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

require('dotenv').config({ path: path.join(__dirname, '../.env') });


app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

const contactRouter = require("./contactHandler");
app.use('/api/contact', contactRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Serveur démarré sur le port ${PORT}`));