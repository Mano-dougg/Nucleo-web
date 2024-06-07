// Defina os dados do usuário que você deseja enviar para a API
const userData = {
  nome: 'John Doe',
  email: 'john.doe@example.com',
  senha: 'senha123',
  idade: 30,
  estado: 'São Paulo',
  cidade: 'São Paulo',
};

// Configurações da solicitação
const requestOptions = {
  method: 'POST',                           // Método HTTP (GET, POST, PUT, DELETE, etc.)
  headers: {                                // Cabeçalhos da solicitação
    'Content-Type': 'application/json',     // Tipo de conteúdo do corpo da solicitação
  },
  body: JSON.stringify(userData),           // Corpo da solicitação convertido para JSON
};

// URL da sua rota de criação de usuário
const url = 'http://localhost:5555/user';

// Enviar a solicitação usando o Fetch API
fetch(url, requestOptions)
  .then(response => {
    // Verifique se a solicitação foi bem-sucedida (status de resposta na faixa de 200)
    if (!response.ok) {
      throw new Error('Erro ao enviar solicitação: ' + response.statusText);
    }
    // Converte a resposta para JSON
    return response.json();
  })
  .then(data => {
    // Manipule os dados da resposta
    console.log('Usuário criado:', data);
  })
  .catch(error => {
    // Captura e manipula erros de rede ou erros no servidor
    console.error('Erro:', error);
  });
