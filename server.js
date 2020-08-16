const PORT = process.env.PORT || 3002;
const express = require('express');
const app = express();
const htmlRoutes = require('./routes/htmlRoute');
const apiRoutes = require('./routes/apiRoute');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);
//



  // Listener~~
  app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });