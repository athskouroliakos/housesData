// server.js
const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3001;

app.use(cors());

const housesData = [
  {
    id: uuidv4(),
    name: 'Gryffindor',
    founder: 'Godric Gryffindor',
    animal: 'Lion',
    color: 'Scarlet and Gold',
  },
  {
    id: uuidv4(),
    name: 'Slytherin',
    founder: 'Salazar Slytherin',
    animal: 'Serpent',
    color: 'Green and Silver',
  },
  {
    id: uuidv4(),
    name: 'Ravenclaw',
    founder: 'Rowena Ravenclaw',
    animal: 'Eagle',
    color: 'Blue and Bronze',
  },
  {
    id: uuidv4(),
    name: 'Hufflepuff',
    founder: 'Helga Hufflepuff',
    animal: 'Badger',
    color: 'Yellow and Black',
  },
];

app.get('/houses', (req, res) => {
  const { name } = req.query;
  if (name) {
    const filteredHouses = housesData.filter((house) =>
      house.name.toLowerCase().includes(name.toLowerCase())
    );
    return res.json(filteredHouses);
  }
  res.json(housesData);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
