export default {
    '/register': {
      post: {
        tags: ['Usuários'],
        summary: 'Cria um novo usuário',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  name: { type: 'string' },
                  email: { type: 'string' },
                  password: { type: 'string' },
                },
              },
            },
          },
        },
        responses: {
          201: { description: 'Usuário criado com sucesso' },
          400: { description: 'Erro na requisição' },
        },
      },
    },
    '/auth': {
      post: {
        tags: ['Usuários'],
        summary: 'Autentica um usuário',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  email: { type: 'string' },
                  password: { type: 'string' },
                },
              },
            },
          },
        },
        responses: {
          200: { description: 'Login realizado com sucesso' },
          401: { description: 'Credenciais inválidas' },
        },
      },
    },
    '/detail-user': {
      get: {
        tags: ['Usuários'],
        summary: 'Retorna os detalhes do usuário autenticado',
        security: [{ bearerAuth: [] }],
        responses: {
          200: { description: 'Detalhes do usuário retornados com sucesso' },
          401: { description: 'Token inválido ou ausente' },
        },
      },
    },
  };
  