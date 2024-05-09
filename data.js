const { v4: uuidv4 } = require('uuid');

const housesData = [
  {
    id: 1,
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

module.exports = housesData;
