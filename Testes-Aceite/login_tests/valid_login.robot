*** Settings ***
Resource        resource.robot
Library         DebugLibrary
Library     ../lib/CustomLibraryTests.py
Suite Setup     Open Browser To Area Logada
Suite Teardown  Close Browser
Test Setup      Go To Login Page

*** Test Cases ***
Test Valid Login
    Given browser is opened to login page
    When user "${LOGIN}" logs in with password "${PASSWORD}"
    Then user Should Be Logged 

Add Purchase Order
    Given browser is opened to login page
    When user "${LOGIN}" logs in with password "${PASSWORD}"
    And user Should Be Logged
    Then Add Deal


*** Keywords ***
Browser is opened to login page
    Area Logada Should Be Open

User "${username}" logs in with password "${password}"
    Input User Name     ${username}
    Input Password      ${password}
    Submit Credentials

Add Deal
    Adicionar oferta    ${DEAL}
