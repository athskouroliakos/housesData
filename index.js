const express = require('express');
const cors = require('cors');
const houseRoutes = require('./routes/houses');

const app = express();
const PORT = 3001;

app.use(cors());
app.use('/houses', houseRoutes);

//Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
