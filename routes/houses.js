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

// Fetch a house by its ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const house = housesData.find((house) => house.id === parseInt(id));
  if (house) {
    res.json(house);
  } else {
    res.status(404).json({ message: 'House not found' });
  }
});

module.exports = router;
