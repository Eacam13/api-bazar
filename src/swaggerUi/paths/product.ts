export default {
    '/product': {
      post: {
        tags: ['Produtos'],
        summary: 'Cria um novo produto',
        security: [{ bearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  name: { type: 'string' },
                  price: { type: 'number' },
                  description: { type: 'string' },
                  image1: { type: 'string' },
                  image2: { type: 'string' },
                  image3: { type: 'string' },
                  quantity: { type: 'number' },
                  category_id: { type: 'string' },
                },
              },
            },
          },
        },
        responses: {
          201: { description: 'Produto criado com sucesso' },
          400: { description: 'Erro na requisição' },
        },
      },
    },
    '/category/products': {
      get: {
        tags: ['Produtos'],
        summary: 'Lista produtos por categoria',
        security: [{ bearerAuth: [] }],
        responses: {
          200: { description: 'Lista de produtos retornada com sucesso' },
          401: { description: 'Token inválido ou ausente' },
        },
      },
    },
    '/delete/{product_id}': {
      delete: {
        tags: ['Produtos'],
        summary: 'Remove um produto',
        security: [{ bearerAuth: [] }],
        parameters: [
          {
            in: 'path',
            name: 'product_id',
            required: true,
            schema: { type: 'string' },
          },
        ],
        responses: {
          200: { description: 'Produto removido com sucesso' },
          404: { description: 'Produto não encontrado' },
        },
      },
    },
  };
  