Feature: Login
As a User
I want to verify if the given set of users can login to the application or not.

Scenario Outline: Verify the users
Given I have an application
When I login with <email> and <password>
Then I can login successfully
And I can logout successfully

Examples:
    | email | password |
    | 'admin@admin.com' | '2020' |
    | 'biancunha@gmail.com' | '123456' |
    | 'growdev@growdev.com.br' | 'growdev123' |

