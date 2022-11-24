# Manual de Uso do projeto
## Requisitos

### Versão do Python
O Robotframework exige que a versão do Python seja **3.6>**. Contudo, recomendo que sua versão do Python instalada seja pelo menos a **3.9.1**, pois foi a versão do Python utilizada durante o processo de desenvolvimento do projeto.


### Versão do pip
A versão do gerenciador de pacotes pip que foi utilizada  foi a 20.2.3. Por tanto, garanta que esteja utilizando pelo menos esta versão.

### Chromedriver atualizado
Para rodar os projetos com Robotframework é necessário que você tenha a última versão (estável, de preferência) do Chromedriver. Você pode obtê-lo em https://artefatos.getnet.com.br/artifactory/chromedriver/. 

Após baixar o executável do Driver, basta adicioná-lo no diretório `C:\DRIVERS`, nomeado como `chromedriver.exe`. Por fim, basta agora adicionar a pasta `C:\DRIVERS` nas **variáveis de ambiente** do Windows.

## Instalação

### baixando as dependências do projeto
Para baixar as dependências do projeto, basta, no diretório root do projeto, rodar o comando `pip install -r requirements.txt`. 



### Rodando os Testes
Para rodar o teste, é necessário apenas rodar o comando `robot <caminho-para-o-arquivo>`. Neste caso, se você leu a documentação escrita no arquivo `readme.md`, perceberá que só será possível executar o arquivo `login_tests/valid_login.robot` pois este é o único que contém o escopo *Test Cases*.