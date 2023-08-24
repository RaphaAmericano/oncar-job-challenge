# Oncar/ Tony Veiculos Job Challange

Resolução do meu desafio

## Para rodar o projeto
É preciso ter o NodeJS com NPM instalado. Depois de clonar o projeto, executar os comandos a seguir

```
npm install
npm run dev
```

Em seguida acesse o http://localhost:3000 e cairá na primeira página da aplicação.

Para ver os leads criados, a url http://localhost:3001/leads retornará um JSON com os leads.

### Comentários

Optei por utilizar o [Turborepo](https://turbo.build/) pois seria mais simples de agrupar em um só repositório a aplicação frontend e a backend, como também os pacotes que são compartilhadas entre ambas.
Para o banco de dados utilizei o SQLite pois seria mais simples para a demonstração, já que ele pode ser embarcado junto. Utilizei o ORM [Prisma](https://www.prisma.io/) para gerir o banco de dados.
Para construir o frontend utilizei o Nextjs, pois já trabalhei com React alguns anos e tenho mais familiaridade com essa biblioteca.
Utilizei para construir a API uma solução bem simples em NodeJS utilizando Express, que é a stack que utilizo no meu atual cargo.

