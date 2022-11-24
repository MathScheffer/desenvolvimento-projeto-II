*** settings ***
Library     SeleniumLibrary




*** Variables ***
${BASE URL}          https://ecommerce-hom.getnet.com.br/#
${LOGIN URL}         ${BASE URL}/login 
${LOGGED URL}        ${BASE URL}/auth   
${BROWSER}           chrome
${DELAY}             0.2
${LOGIN}             77185395712
${PASSWORD}          getnet123
${DEAL}              AUT HML


*** Keywords ***
Open Browser To Area Logada
    Open Browser    ${LOGIN URL}    ${BROWSER}
    Maximize Browser Window
    Set Selenium Speed      ${DELAY}
    Area Logada Should Be Open

Area Logada Should Be Open
    Title Should Be     Credenciamento Digital Getnet

Go to Login page    
    Go To       ${LOGIN URL}

Input User Name
    [Arguments]     ${username}
    Input Text      input-login-username    ${username}

Input Password
    [Arguments]     ${password}
    Input Text      input-login-password    ${password}

Submit Credentials
    Click Element   //span[contains(text(),'entrar')]/..

User Should Be Logged
    Wait Until Element Is Not Visible       //p[contains(text(),'Autenticando')]
    Location Should Be  ${LOGGED URL}

   