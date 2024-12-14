export default {
    '/cart': {
      post: {
        tags: ['Carrinho'],
        summary: 'Adiciona um item ao carrinho',
        security: [{ bearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  productId: { type: 'string' },
                  quantity: { type: 'number' },
                },
              },
            },
          },
        },
        responses: {
          201: { description: 'Item adicionado ao carrinho com sucesso' },
          400: { description: 'Erro na requisição' },
        },
      },
    },
  };
  