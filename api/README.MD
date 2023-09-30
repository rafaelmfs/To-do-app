# API TO-DO APP

## Projeto

Projeto simples para estudo de NodeJS. Se trata de uma aplicação para uma lista de tarefas utilizando um banco sqlite.
Para rodar esse projeto basta clonar o repositório, entrar nessa pasta via terminal e rodar os comandos:

```
  npm install
  npm run knex -- migrate:latest
  npm run dev
```

### APIs

**GET** -> `/tasks/` -> Buscar todas as tasks cadastradas no banco de dados

**GET** -> `/tasks/:id` -> Buscar todas uma task específica pelo ID

**POST** -> `/tasks/` -> Criação de uma nova task, é necessário enviar as informações: 
```
  name: string
  description?: string
  completed?: 0 ou 1
```

**PUT** -> `/tasks/:id` -> Atualiza uma task pelo ID, recebe os dados: 
```
  name?: string
  description?: string
  completed?: 0 ou 1
```

**PATCH** -> `/tasks/conclude/:id` -> Marcar uma task como conluida, é necessário enviar se será concluida ou não:
```
  completed: 0 ou 1
```

**DELETE** -> `/tasks/:id` -> Apagar uma task pelo ID