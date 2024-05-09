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
  console.log('Requested house IDD:', id); // Add this line for debugging
  const house = housesData.find((house) => house.id === id);
  if (house) {
    res.json(house);
  } else {
    res.status(404).json({ message: 'House not found' });
  }
});

// Create a new house
router.post('/', (req, res) => {
  try {
    const newHouse = req.body;
    const newId = uuidv4();
    res.status(201).json(newHouse);
  } catch (error) {
    console.error('Error creating new house:', error);
    res.status(500).json({ message: 'Failed to create new house' });
  }
});

module.exports = router;
