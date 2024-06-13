# Documentação da API

Bem-vindo à documentação da API para gerenciamento de pedidos de pães.

## Sumário

- [Instalação](#instalação)
- [Variáveis de ambiente](#variáveis-de-ambiente)
- [Executando a api](#executando-a-api)
- [Rotas](#rotas)
  - [Listar todos os pedidos](#get-todos-os-pedidos)
  - [Listar pedidos em aberto](#get-pedidos-em-aberto)
  - [Listar pedidos finalizados](#get-pedidos-finalizados)
  - [Adicionar pedido](#post-novo-pedido)
  - [Finalizar pedido](#put-finalizar-pedido)
- [Tipos de dados](#tipos-de-dados)
- [Observações](#observações)

## Instalação

1. Clonar o repositorio:
    ```sh
    git clone https://github.com/your-repo/bakery-order-api.git
    cd bakery-order-api
    ```

2. Instalar dependências:
    ```sh
    npm install
    ```

3. Fazer o set up dos dados:
    ```sh
    npx prisma migrate dev --name init
    ```

## Variáveis de ambiente

Crie um arquivo `.env` na pasta raiz do diretório e adicione as seguintes propriedades:

```
DATABASE_URL=url_do_seu_banco_de_dados_postgresql
PORT=seu_port_de_preferencia
```

## Executando a API

Para iniciar a api, execute os comandos:
```sh
npm run dev
```
O servidor irá começar no port que você preencheu no seu arquivo `.env`.

## Rotas

### GET Todos Os Pedidos
#### rota: /api/order
Retorna uma lista de todos os pedidos cadastrados.

#### Exemplo de Requisição:
```json
GET /api/order
```
#### Exemplo de Resposta:

```json
[
  {
    "id": 1,
    "clientName": "João da Silva",
    "finished": false,
    "breadItems": [
      {
        "name": "Pão Francês",
        "unitaryValue": 2.5,
        "quantity": 5,
        "total": 12.5
      },
      {
        "name": "Pão Integral",
        "unitaryValue": 3.0,
        "quantity": 3,
        "total": 9.0
      }
    ],
    "total": 21.5
  },
  {
    "id": 2,
    "clientName": "Maria Oliveira",
    "finished": true,
    "breadItems": [
      {
        "name": "Pão Francês",
        "unitaryValue": 2.5,
        "quantity": 10,
        "total": 25.0
      }
    ],
    "total": 25.0
  }
]
```
### GET Pedidos Em Aberto
#### Rota: GET /api/order/open
Retorna uma lista de todos os pedidos em aberto (não finalizados).

#### Exemplo de Requisição:
```json
GET /api/order/open
```
#### Exemplo de Resposta:
```json
[
  {
    "id": 1,
    "clientName": "João da Silva",
    "finished": false,
    "breadItems": [
      {
        "name": "Pão Francês",
        "unitaryValue": 2.5,
        "quantity": 5,
        "total": 12.5
      },
      {
        "name": "Pão Integral",
        "unitaryValue": 3.0,
        "quantity": 3,
        "total": 9.0
      }
    ],
    "total": 21.5
  }
]
```
### GET Pedidos Finalizados
#### Rota: GET /api/order/closed
Retorna uma lista de todos os pedidos finalizados.

#### Exemplo de Requisição:
```json
GET /api/order/closed
```
#### Exemplo de Resposta:
```json
[
  {
    "id": 2,
    "clientName": "Maria Oliveira",
    "finished": true,
    "breadItems": [
      {
        "name": "Pão Francês",
        "unitaryValue": 2.5,
        "quantity": 10,
        "total": 25.0
      }
    ],
    "total": 25.0
  }
]
```
### POST Novo Pedido
#### Rota: POST /api/order
Cria um novo pedido com o cliente e os itens de pão especificados.

#### Requisição:
```json
POST /api/order
{
  "clientName": "José Santos",
  "breadItems": [
    {
      "name": "Pão Francês",
      "quantity": 3
    },
    {
      "name": "Pão de Queijo",
      "quantity": 5
    }
  ]
}
```
#### Resposta:
```json
{
  "id": 3,
  "clientName": "José Santos",
  "finished": false,
  "breadItems": [
    {
      "name": "Pão Francês",
      "unitaryValue": 2.5,
      "quantity": 3,
      "total": 7.5
    },
    {
      "name": "Pão de Queijo",
      "unitaryValue": 4.0,
      "quantity": 5,
      "total": 20.0
    }
  ],
  "total": 27.5
}
```
### PUT finalizar pedido
#### Rota: PUT /api/order/finish/
Finaliza um pedido existente com o ID especificado.

#### Requisição:
```json
PUT /api/order/finish/2
```
#### Resposta:
```json
{
  "id": 2,
  "clientName": "João da Silva",
  "finished": true,
  "breadItems": [
    {
      "name": "Pão Francês",
      "unitaryValue": 2.5,
      "quantity": 5,
      "total": 12.5
    },
    {
      "name": "Pão Integral",
      "unitaryValue": 3.0,
      "quantity": 3,
      "total": 9.0
    }
  ],
  "total": 21.5
}
```
## Tipos de Dados
### Order
```typescript
{
  clientName: string;
  breadItems: BreadOrder[];
}
```
### BreadOrder
```typescript
{
  name: string;
  quantity: number;
}
```
### OrderList
```typescript
{
  id: number;
  clientName: string;
  finished: boolean;
  breadItems: Bread[];
  total: number; // Calculado pela soma dos totais dos pães
}
```
### Bread
```typescript
{
  name: string;
  unitaryValue: number;
  quantity: number;
  total: number; // Calculado pelo preço unitário multiplicado pela quantidade
}
```
## Observações
Certifique-se de enviar dados válidos nos formatos especificados para evitar erros.

Os preços unitários dos pães são obtidos a partir do banco de dados.

Caso haja erros nas requisições, a API retornará respostas adequadas com mensagens de erro explicativas.
```csharp

Este README.md fornece uma visão geral clara dos endpoints da sua API, exemplos de uso, tipos de dados esperados e estrutura das respostas. Certifique-se de atualizá-lo conforme novos endpoints ou mudanças na estrutura da API forem adicionadas.
```




