*** Settings ***
Resource        resource.robot
Library         DebugLibrary
Library     ../lib/CustomLibraryTests.py
Suite Setup     Open Browser To Login Page
Suite Teardown  Close Browser
Test Teardown      Logoff

*** Test Cases ***
Test Create User
    Given browser is opened to login page
    When user "${LOGIN ADM}" logs in with password "${PASSWORD ADM}"
    Then Create User
    Verify Success Message
    And add rotina

Test User Verify Routine
    Given browser is opened to login page
    When user "${LOGIN USER}" logs in with password "${PASSWORD USER}"
    And select routine Segunda
    Then edit field carga Of Exercise Rosca Direta With Value 10
    And edit field cargaAlcancada Of Exercise Rosca Direta With Value 10
    And edit field repeticoesFeitas Of Exercise Rosca Direta With Value 10
    And save exercise Rosca Direta
    And edit field carga Of Exercise Rosca Concentrada With Value 10
    And edit field cargaAlcancada Of Exercise Rosca Concentrada With Value 10
    And edit field repeticoesFeitas Of Exercise Rosca Concentrada With Value 10
    And save exercise Rosca Concentrada
    And close modal

Test Delete User
    Given browser is opened to login page
    When user "${LOGIN ADM}" logs in with password "${PASSWORD ADM}"
    Then Delete User Usuario Teste

*** Keywords ***
Browser is opened to login page
    Login Page Should Be Open

User "${username}" logs in with password "${password}"
    Input User Name     ${username}
    Input Password      ${password}
    Submit Credentials      Logar


Create User
    Write On Input Cadastro     nome        Usuario
    Write On Input Cadastro     sobrenome   Teste
    Write On Input Cadastro     idade       26
    Write On Input Cadastro     peso        80
    Write On Input Cadastro     objetivo    ganho
    Write On Input Cadastro     whatsapp      997856303
    Write On Input Cadastro     role        USER
    Submit Credentials          Cadastrar

Add Rotina
    Click On Editar                     Usuario Teste
    Wait Until Element is Visible       //div[contains(@class,'card-adicionar-rotina')]
    Add Rotina Card                     Segunda
    Click Rotina                        Segunda 
    Wait Until Element Is Visible       //section[@id='modal-editar']       2
    Add Treino                           Rosca Direta        0        4      12 
    Add Treino                           Rosca Concentrada   1        4      12
    Click Button By Text                 Fechar
    Title Should Be                      Editar Usuario

Select Routine ${dia}
    Click Element       //div[contains(@class,'card-rotina-container')]//a[text()='${dia}']

Edit Field ${campo} Of Exercise ${nome} With Value ${valor}
    Type Edit Input     ${nome}     ${campo}       ${valor}

Save Exercise ${exercicio}
    Save Exercise       ${exercicio}


Close modal
    Wait Until Element Is Not Visible      //section[contains(@class,'sucess')]     3  
    Wait Until Element Is Enabled          //div[@class='popup-container-elements']//button[contains(text(),'Fechar')] 
    Click Button By Text                    Fechar
    Wait Until Element Is Not Visible       //section[@id='modal-editar']

Delete User ${user}
    Click On Excluir Button     ${user}
    Wait Until Element Is Not Visible       //li/span[contains(text(),'${user}')]
