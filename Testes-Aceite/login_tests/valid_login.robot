*** Settings ***
Resource        resource.robot
Library         DebugLibrary
Library     ../lib/CustomLibraryTests.py
Suite Setup     Open Browser To Login Page
Suite Teardown  Close Browser
Test Setup      Go To Login Page

*** Test Cases ***
Test Valid Login Page
    Given browser is opened to login page
    When user "${LOGIN ADM}" logs in with password "${PASSWORD ADM}"
    Then user Should Be Logged 



*** Keywords ***
Browser is opened to login page
    Login Page Should Be Open

User "${username}" logs in with password "${password}"
    Input User Name     ${username}
    Input Password      ${password}
    Submit Credentials

Add Deal
    Adicionar oferta    ${DEAL}
