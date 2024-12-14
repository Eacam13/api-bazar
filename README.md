# API Bazar

## Descrição
A **API Bazar** é um backend desenvolvido em Node.js com TypeScript, projetado para gerenciar um bazar virtual. O sistema permite que um administrador adicione informações sobre roupas a serem vendidas, incluindo funcionalidades para autenticação, upload de arquivos e manipulação de dados.

---

## Funcionalidades
- **Autenticação**: Utiliza JWT para gerenciar sessões de administrador.
- **Cadastro de Produtos**: Permite o cadastro de informações como nome, descrição, preço e imagens.
- **Upload de Arquivos**: Integração com o Cloudinary para armazenamento de imagens.
- **Banco de Dados**: Utiliza Prisma como ORM para interagir com o banco de dados PostgreSQL.
- **Segurança**: Gerenciamento de senhas com bcryptjs.

---

## Tecnologias Utilizadas

### Linguagem e Ambiente
- [Node.js](https://nodejs.org/) com [TypeScript](https://www.typescriptlang.org/)

### Frameworks e Bibliotecas
- [Express](https://expressjs.com/) - Para gerenciar rotas e requisições.
- [Prisma](https://www.prisma.io/) - ORM para acesso ao banco de dados.
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - Para autenticação baseada em token.
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js/) - Para hash de senhas.
- [dotenv](https://github.com/motdotla/dotenv) - Gerenciamento de variáveis de ambiente.
- [cloudinary](https://cloudinary.com/) - Para upload e armazenamento de imagens.

### Ferramentas de Desenvolvimento
- [ts-node-dev](https://github.com/wclr/ts-node-dev) - Para desenvolvimento com recarregamento automático.
- [TypeScript](https://www.typescriptlang.org/) - Superset de JavaScript para tipagem estática.

---

## Instalação e Configuração

### Requisitos
- Node.js v16+  
- Gerenciador de pacotes npm ou yarn

### Passos

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/api-bazar.git
   cd api-bazar
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**:
   Crie um arquivo `.env` na raiz do projeto e configure as seguintes variáveis:
   ```env
   DATABASE_URL="sua-string-de-conexão"
   CLOUDINARY_URL="sua-string-de-conexão"
   JWT_SECRET="sua-chave-secreta"
   ```

4. **Executando em ambiente de desenvolvimento**:
   ```bash
   npm run dev
   ```

5. **Build para produção**:
   ```bash
   npm run build
   npm start
   ```

---

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor em modo de desenvolvimento com recarregamento automático.
- `npm run build`: Transpila o código TypeScript para JavaScript.
- `npm start`: Executa a versão de produção do servidor.

---

## Estrutura do Projeto

```
api-bazar/
├── src/
│   ├── server.ts        # Arquivo principal do servidor
│   ├── routes.ts        # Definição de rotas
│   ├── controllers/     # Lógica das requisições
|   ├── services/        # Lógica dos serviços com banco de dados
│   ├── middlewares/     # Middlewares para validações
│   ├── prisma/          # Configuração do Prisma Client
│   └── utils/           # Funções auxiliares
├── .env                 # Configurações de ambiente
├── package.json         # Configuração de dependências e scripts
├── tsconfig.json        # Configuração do TypeScript
└── README.md            # Documentação do projeto
```

---

## Contribuição

1. Fork o repositório
2. Crie uma branch para sua funcionalidade (`git checkout -b minha-feature`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova funcionalidade'`)
4. Envie para o branch principal (`git push origin minha-feature`)
5. Abra um Pull Request

---

## Licença
Este projeto está licenciado sob a Licença ISC. Para mais informações, consulte o arquivo [LICENSE](./LICENSE).

