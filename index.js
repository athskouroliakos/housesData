const express = require('express');
const cors = require('cors');
const houseRoutes = require('./routes/houses');
const router = require('./routes/houses');

const app = express();
const PORT = 3001;

router.use(cors());
router.use('/houses', houseRoutes);

//Error handling
router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

router.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
