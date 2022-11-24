*** settings ***
Library     SeleniumLibrary




*** Variables ***
${BASE URL}          http://localhost:3001
${LOGIN URL}         ${BASE URL}/login 
${LOGGED URL ADM}        ${BASE URL}/adm   
${BROWSER}           chrome
${DELAY}             0.2
${LOGIN ADM}             Matheus Scheffer
${PASSWORD ADM}          123
${DEAL}              AUT HML


*** Keywords ***
Open Browser To Login Page
    Open Browser    ${LOGIN URL}    ${BROWSER}
    Maximize Browser Window
    Set Selenium Speed      ${DELAY}
    Login Page Should Be Open

Login Page Should Be Open
    Title Should Be     Login

Go to Login page    
    Go To       ${LOGIN URL}

Input User Name
    [Arguments]     ${username}
    Input Text      usuario    ${username}

Input Password
    [Arguments]     ${password}
    Input Text      senha    ${password}

Submit Credentials
    Click Element   //button[contains(text(),'Logar')]

User Should Be Logged
    Wait Until Element Is Not Visible       //h1[contains(text(),'Bem Vindo')]
    Location Should Be  ${LOGGED URL ADM}

   