Feature: Create link transfer using WeTransfer website

  Scenario: TC_001 Upload a file and delete when link is created on the account
    Given I am a new user on WeTransfer website
    And I accept the terms and condition on the homepage
    When I intend to upload a file by logging in to my account
    Then I should be able to create a link transfer
    And I should be able to delete the uploaded file from the account