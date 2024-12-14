import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import tags from './tags';
import userPaths from './paths/user';
import categoryPaths from './paths/category';
import productPaths from './paths/product';
import cartPaths from './paths/cart';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Gerenciamento Bazar',
      version: '1.0.0',
      description: 'Documentação da API de gerenciamento de usuários, categorias, produtos e carrinho.',
    },
    servers: [
      {
        url: 'http://localhost:3333',
        description: 'Servidor Local',
      },
    ],
    tags, // Importa as tags
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    paths: {
      ...userPaths,
      ...categoryPaths,
      ...productPaths,
      ...cartPaths,
    },
  },
  apis: [], // Deixe vazio pois todas as configurações estão modularizadas
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export { swaggerUi, swaggerDocs };
