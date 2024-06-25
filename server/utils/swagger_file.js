const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Jansamvad API Document',
      version: '1.0.0',
      description: 'Jansamvad Regiser API',
    },
  },
  apis: ['./routes.js'], // Path to your API route files
};

const swaggerSpec = swaggerJsdoc(options);
module.exports = swaggerSpec;
