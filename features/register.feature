Feature: Registert into losestudiantes

  Scenario Outline: Register with wrong and valid inputs

    Given I go to losestudiantes home screen
    When I open the login screen
    And I click on register

    And I fill with <name>, <lastname>, <email>, <password>, <confirmpassword>
    And I click on terms <terms>

    And I try to register
    Then I expect to validate the register status <status>

    Examples:
      | name    | lastname   | email            | password   | confirmpassword | terms     | status    |
      |         | apellido1  | test@demo.co     | 87as>?78   | 87as>?78        | x         | fail      |
      | nombre2 |            | test@demo.co     | 87as>?78   | 87as>?78        | x         | fail      |
      | nombre3 | apellido3  |                  | 87as>?78   | 87as>?78        | x         | fail      |
      | nombre4 | apellido4  | test@demo.co     |            | 87as>?78        | x         | fail      |
      | nombre5 | apellido5  | test@demo.co     | 87as>?78   |                 | x         | fail      |
      | nombre6 | apellido6  | test@demo.co     | 87as>?78   | 87as>?78        |           | fail      |
      | nombre0 | apellido0  | miso@gmail.com   | 87as>?78   | 87as>?78        | x         | failUser  |
      | nombre1 | apellido1  | mail@demo.co     | 87as>?78   | 87as>?78        | x         | pass      |
