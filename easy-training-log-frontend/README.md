#Easy Training Log 
Facilitando o seu treino!

## Contextualizando
Com o avanço da pandemia e o Estado impondo protocolos de cuidados para conter o avanço, grande parte da população passou a ter mais cuidados consigo, como com a alimentação e a adoção de atividade física para melhorar a imunidade¹. Como resultado, as academias de menor porte acabaram por receber uma grande demanda de atendimento, dificultando o aprendizado dos alunos e a gestão destas academias.

Estas academias de menor porte muitas vezes acabam adotando o uso de **fichas** para que os instrutores registrem o treino de seus alunos por conta da falta de informatização do lugar que, embora seja muito comúm o uso de sistemas para cadastro de alunos e roletas biométricas, muitos gestores não pensam em adotar sistemas informatizados para que os instrutores façam o registro e manutenção do treino de seus alunos.

Há também aquelas academias que se esforçam para se modernizar, mas acabam adotando sistemas complexos mas de baixa qualidade, com UI pouco pensado no usuário, além de uma arquitetura pesada tanto para a rede, quanto para a máquina que se encontra instalado.

## Definição dos Problemas

**Instrutores** e **alunos** de academias que **não possuem uma estrutura bem planejada** e que recebem uma **demanda maior que sua capacidade** acabam por passar por alguns problemas característicos de gerenciamento e atendimento de acordo com a infraestrutura que se estão inseridos.

Em um ambiente que fichas são o meio de registro de treino, são comuns as perdas de seus registros ou esquecimentos (quando o aluno tas leva para casa). Quando o layout da planilha é fixo, ou seja, os treinos já estão preenchidos e os instrutores são obrigados a passar aqueles exercícios, os alunos e instrutores acabam por terem dificuldades para criar uma variação adequada nos treinos para os alunos evoluírem. Além disso, a manutenção do treino pela parte do instrutor acaba gerando novas fichas, e o registro das cargas executadas pelos alunos acaba por ser incomoda **se** não houver espaço para preencher durante todo o período de duração do treino, fazendo com que haja a necessidade de reproveitar o mesmo slot na ficha, ocasionando em filas em frente aos materiais da academia, bem como o próprio esquecimento do registro por conta da alta demanda de tempo de executar esta ação.

Por outro lado, em um ambiente informatizado **mal planejado** outros problemas começam a aparecer: Software pode ser muito pesado para o hardware da academia (totem), ocasionando em problemas de performance como demora na abertura do sistemas, sistema não responde aos gatilhos acionados pela interface, entre outros bugs. Além dos problemas envolvendo perfomance, temos também programas que são feitos sem pensar no usuário final: Botões que não passam uma clareza para que servem ou que ficam escondidos pela tela, ou diversas janelas para que seja possível o **instrutor** montar o treino do seu aluno como o próprio aluno fazer o registro de seu treino ou imprimir em impressoras 58mm. Claro, também não pode faltar o problema da descrição de exercícios ser cortada na impressão por conta do software não fazer  os devidos ajustes.


## Benchmark

## Objetivo 
O objetivo principal do projeto é lançar uma ferramenta capaz de facilitar ainda mais o trabalho dos instrutores em criar ou modificar a rotina de treinos dos alunos de forma simples e eficiente. Além disso: ser uma ferramenta que possibilite àqueles alunos que gostam de manter seus celulares perto de si possam utilizá-los com foco em seu treino e mantê-los mais focados, mas que também atenda àqueles que não gostam de utilizar seus celulares na academia e utilizar impressões dos seus treinos.

Para alcançar este objetivo principal, temos segmentados os seguintes objetivos principais da aplicação:

Ferramenta simples e intuitivas para os usuários da mesma - Instrutores e Alunos - com um trabalho na interface gráfica pensada com a devida empatia;

Possibilitar que a maior liberdade para instrutores cadastrarem ou fazerem alterações na rotina de treino dos alunos criando uma "ficha virtual" totalmente personalizável;

Fazer com que a interface gráfica seja adaptável aos mais variados tipos de dispositivo trabalhando com responsividade;

Executar impressões claras e sem cortes;

Permitir que os alunos consigam criar um "log de performance", sendo possível resgatar dados antigos sobre sua evolução em carga para cada tipo de exercício;

Preocupar-se em diminuir dúvidas de um aluno até o instrutor para tirar duvidas sobre execução de exercícios com a possibilidade de inserção de vídeos de execução no exercício;

Possibilitar a visualização e impressão dos treinos, além do aluno poder baixar a "ficha" criada no ap referente ao treino do dia para que o mesmo tenha um proveito offline da organização;

Disponibilizar um cronômetro em cada série para que, de forma optativa, os alunos controlem seu tempo de descanso e;

Disponibilizar um serviço de "check-in" de duas etapas onde, na primeira, os alunos incrementarão um contador de alunos presentes na academia ao pressionarem um "botão de presença", possibilitando o monitoramento de horários de picos no estabelecimento. Na segunda etapa, será possível marcar o grupo muscular que está exercitando, possibilitando que tanto os instrutores quanto os alunos consigam monitorar também o que está sendo mais utilizado e também quando.

## Stack Técnológico
**Node.js**: Node é um software interpretador, de código  e múltiplataforma, que torna possível a execução de aplicações em Javascript fora de um Navegador Web. Esta ferramenta está presente tanto no nosso BackEnd, executando o Express.js e o pacote Mongoose, quanto executando a biblioteca React.JS, para o FrontEnd.

**Express.js**: Express é um framework para *Node* que fornece a possibilidade de criarmos um *servidor HTTP*, sendo responsável pela comunicação da nossa API.
    - **Mongoose**: É uma biblioteca que fornece a conexão entre o ambiente de execução *Node* e um banco de dados *MongoDB*.
    - **Bcrypt**: Biblioteca de cryptografia bastante utilizada para checar a veracidade de dados sem expor os mesmo. No projeto, é utilizada no meio de autenticação do usuário.

**React.js**: A biblioteca para desenvolvimento FrontEnd utilizada no projeto. Com ela, podemos gerenciar os *estados* da aplicação com uma certa destreza, além de gerenciar também as rotas da aplicação.

**MongoDB**: Para termos mais flexibilidade nas entidades (classes) que compõe nosso sistema, foi optado pelo **MongoDB** por ser um banco de dados *não-relacional*. Dessa forma, o trabalho para modificar nossas classes conforme a necessidade não ficaria tão oneroso quanto em um sistema *relacional*.

**Gestão de código e Versionamento**: Para garantir uma boa gestão de tarefas, foi optado pelo software **Jira**. Nele, conseguimos construir um quadro Kanban personalizável que nos permite gerenciar os estados de uma tarefa e do Backlog. Além disto, integrado com o **Github**, nosso sistema de versionamento de código, conseguimos monitorar todos os pull-requests que representam determinado card com um simples sistema de nomeação de branchs: Ao nomear a branch com o ID do card, conseguimos visualizar o PR no próprio Jira.

## Descrição da Solução

<Como a ferramenta Funciona e com prints de tela>

## Arquitetura 
<Artefatos produzidos como CanvaMVP, quadro Kanban, histórias de usuário, modelagem do negócio e Sketch das telas>



## Validação (ISO/IEC 25000)
<Apresentação da pesquisa de satisfação>







