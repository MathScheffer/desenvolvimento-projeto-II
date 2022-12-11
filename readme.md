# Easy Training Log
Este arquivo visa orientar sobre como instalar e montar as partes de back-end e front-end do projeto.

## Banco de Dados
Primerio, você precisará instalar um banco de dados MongoDB e, nele, um banco de dados chamado easy_training_log. Nele, você adicionará uma collection chamada *Usuario*, com o seguinte objeto de entrada:

        {
            "nome": "Matheus Scheffer",
            "senha":"$2b$10$Zq7SBX3fnbU/.COwScLLO.b7VkvV/ucYvuQ7GIbHmRm4Z81BOlsQi",
            "whatsapp":9999999,
            "role":"ADM"
        }

Este usuário terá como nome **Matheus Scheffer** e senha **123** para entrar na parte do Front-end da aplicação e também nos testes de api.

*Importante*: Todo usuário deverá ter um Nome e Sobrenome separados por um espaço!

## Back-End
O Back-End é conectado pelo banco de dados via url `'mongodb://localhost/easy_training_log'`, por tanto, o banco de dados **necessariamente** deve se chamar **easy_training_log**!
O Back-end será exposto pela url `http://localhost:3000`.

### Instalar dependências
Para instalar as dependências do projeto, basta entrar no diretório do projeto (easy-training-log-backend) com o terminal e usar o comando `npm install` para que o gerenciador de pacotes adicione todas as dependências necessárias.

### Inicializando
Para inicializar o projeto, basta rodar o comando `npm start`.


## Front-End
O Front-End é conectado pelo Back-end pela url base `http://localhost:3000`. Sendo assim, a interface só funcionará se o Back-end estiver de pé e sem error, além de conectado ao banco de dados.

### Instalar Dependências
Assim como feito anteriormente como Back-End, é necessário que navegar até o diretório do projeto (easy-training-log-frontend) e rodar o comando `npm install`.

### Inicializando
Para inicializar o projeto, você precisará primeiro garantir que o Back-end esteja conectado e já usando a porta **3000**. Dito, você precisará rodar o comando `npm start`. Após isto, aparecerá uma opção no terminal perguntando se você deseja rodar o projeto na porta **3001**. Digita **y** e tecle enter. 

Agora, basta explorar o projeto.