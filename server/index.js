const express = require('express');
const app = express();
app.use(express.json());
require("dotenv").config()
const routes = require('./routes.js');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./utils/swagger_file.js'); // Adjust the path accordingly
const connectDB = require('./db/connectDB.js');

app.use(cors())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/', routes);
//CONNECT TO DB
connectDB();

app.listen(5000, () => {
    console.log('Server Started on port 5000');
});

