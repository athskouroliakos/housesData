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
