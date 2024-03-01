const express = require('express');
const housesData = require('../data');

const router = express.Router();

//Fetch houses
router.get('/', (req, res) => {
  const { name } = req.query;
  if (name) {
    const filteredHouses = housesData.filter((house) =>
      house.name.toLowerCase().includes(name.toLowerCase())
    );
    return res.json(filteredHouses);
  }
  res.json(housesData);
});

const addHouse = (newHouse) => {
  housesData.push(newHouse);
};

router.post('/houses', (req, res) => {
  const newHouse = {
    id: uuidv4(),
    name: 'House',
    founder: 'founder',
    animal: 'animal',
    color: 'undefined',
  };
  addHouse(newHouse);
  res.json({ message: 'House added successfully', newHouse });
});

module.exports = router;
