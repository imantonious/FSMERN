const PORT = 8000;
const express = require('express');
const cors = require('cors');
const app = express();

// configs
require('./server/config/mongoose.config');

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// routes
require('./server/routes/person.routes')(app);

// server instance
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
