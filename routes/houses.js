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
    housesData.push(newHouse);
    res.status(201).json(newHouse);
  } catch (error) {
    console.error('Error creating new house:', error);
    res.status(500).json({ message: 'Failed to create new house' });
  }
});

// Update a house by its ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const updatedHouseData = req.body;

  // Map over housesData array and update the house with the specified ID
  const updatedHousesData = housesData.map((house) => {
    if (house.id === id) {
      return { ...house, ...updatedHouseData };
    }
    return house;
  });

  // Check if the house with the specified ID was found and updated
  const updatedHouse = updatedHousesData.find((house) => house.id === id);
  if (updatedHouse) {
    // If the house was found and updated, send a success response
    res.json({ message: 'House updated successfully', house: updatedHouse });
  } else {
    // If the house was not found, send a 404 Not Found response
    res.status(404).json({ message: 'House not found' });
  }
});

// Delete a house by its ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = housesData.findIndex((house) => house.id === id);
  if (index !== -1) {
    const deletedHouse = housesData.splice(index, 1);
    res.json(deletedHouse[0]);
  } else {
    res.status(404).json({ message: 'House not found' });
  }
});

module.exports = router;
