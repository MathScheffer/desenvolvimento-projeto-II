*** settings ***
Library     SeleniumLibrary


*** Variables ***
${BASE URL}          http://localhost:3001
${LOGIN URL}         ${BASE URL}/login 
${LOGGED URL ADM}        ${BASE URL}/adm   
${BROWSER}           chrome
${DELAY}             0.3
${LOGIN ADM}             Matheus Scheffer
${PASSWORD ADM}          123
${LOGIN USER}            Usuario Teste
${PASSWORD USER}         usuario.teste
${DEAL}              AUT HML


*** Keywords ***
Open Browser To Login Page
    Open Browser    ${LOGIN URL}    ${BROWSER}
    Maximize Browser Window
    Set Selenium Speed      ${DELAY}
    Login Page Should Be Open

Login Page Should Be Open
    Title Should Be     Login

Logoff
    Click Button By Text        Sair

Input User Name
    [Arguments]     ${username}
    Input Text      usuario    ${username}

Input Password
    [Arguments]     ${password}
    Input Text      senha    ${password}

Submit Credentials
    [arguments]     ${text}
    Click Element   //button[contains(text(),'${text}')]

Write On Input Cadastro
    [arguments]                     ${id}       ${text}
    Write Text Input Cadastro       ${id}       ${text}

Verify Success Message
    Wait Until Element is Visible      //section[contains(@class,'sucess')]     2

Click On Editar
    [arguments] 	            ${username}
    Click On Editar Button      ${username}

Add Rotina Card
    [arguments]         ${dia}
    Click Card Add Rotina
    Input Text          dia         ${dia}
    Click Button By Text    Salvar
    Wait Until Element is Visible       //div[@class='card-rotina-container']//a[contains(text(),'${dia}')]     2

Add Treino
    [arguments]      ${nome}    ${index}        ${serie}        ${repeticoes}
    Wait Until Element Is Visible       //div[@class='card-adicionar-exercicio']
    Click Add Exercicio
    Write Nome Exercicio                ${nome}     ${index}
    Write Input Exercicio               series      ${serie}                              
    Write Input Exercicio               repeticoes      ${repeticoes}
    Click Button By Text And Index      Salvar        ${index}

Type Edit Input
    [arguments]     ${nome}     ${atributo}       ${valor}

    Input Text      //textarea[contains(text(),'${nome}')]/..//input[@id='${atributo}']     ${valor}

Save Exercise
    [arguments]     ${nome}

    Click Element                      //textarea[contains(text(),'${nome}')]/../..//button[contains(text(),'Salvar')]
    Wait Until Element is Visible      //section[contains(@class,'sucess')]     2
    Element Should Be Visible          //section[contains(@class,'sucess')]     2 
    

   