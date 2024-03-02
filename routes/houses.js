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

// Add a route for creating new houses
router.post('/', (req, res) => {
  try {
    const { id, name, color, founder, animal } = req.body;

    // Validate the required fields (you may want to add more validation)
    if (!id || !name || !color || !founder || !animal) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Create a new house object
    const newHouse = {
      id,
      name,
      color,
      founder,
      animal,
    };

    // Add the new house to the data array
    housesData.push(newHouse);

    // Send a success response
    res
      .status(201)
      .json({ message: 'House added successfully', house: newHouse });
  } catch (error) {
    console.error('Error creating new house:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
