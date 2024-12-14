export default {
    '/category': {
      post: {
        tags: ['Categorias'],
        summary: 'Cria uma nova categoria',
        security: [{ bearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  name: { type: 'string' },
                },
              },
            },
          },
        },
        responses: {
          201: { description: 'Categoria criada com sucesso' },
          400: { description: 'Erro na requisição' },
        },
      },
    },
    '/categories': {
      get: {
        tags: ['Categorias'],
        summary: 'Lista todas as categorias',
        security: [{ bearerAuth: [] }],
        responses: {
          200: { description: 'Lista de categorias retornada com sucesso' },
          401: { description: 'Token inválido ou ausente' },
        },
      },
    },
  };
  