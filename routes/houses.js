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

module.exports = router;

//Add new House
/*const addHouse = (newHouse) => {
  housesData.push(newHouse);
};

router.post('/', (req, res) => {
  const newHouse = req.body;
  addHouse(newHouse);
  res.json({ message: 'House added successfully', newHouse });
});
*/
