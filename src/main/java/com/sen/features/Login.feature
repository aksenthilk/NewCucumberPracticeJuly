Feature: Login into Free CRM

Background:
	Given User is on Free CRM Home page

@smoke @regression 
Scenario: Login with valid user credentials
When User submits valid "naveenk" and "test@123"
Then user lands on CRMPRO page
#Then user logouts by closing the browser

@sanity @smoke
Scenario: Login with wrong user name
When User submits invalid username and valid password
|senthil|test@123|
Then user stays on the Home page
#Then user logouts by closing the browser

@env @regression
Scenario Outline: Login with wrong password
When User submits valid "<username>" and invalid "<password>"
Then user stays on Home page
#Then user logouts by closing the browser
Examples:
|username|password|
|naveenk|senthil|




  