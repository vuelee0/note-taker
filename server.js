const express = require('express');

// create port
const PORT = process.env.PORT || 3001;
// initialize app
const app = express();

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');



// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});