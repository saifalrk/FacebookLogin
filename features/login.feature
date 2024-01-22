Feature: Facebook Login

  Scenario: Successful Login
    Given the user is on the Facebook login page
    When the user enters valid credentials
    And clicks the login button
    Then the user should be logged in successfully