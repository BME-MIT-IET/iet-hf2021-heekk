Feature: Protocol modifications
  Test out the protocol modification.

  Scenario Outline: Protocol
    Given url is "<input_url>" 
    When protocol set to "<protocol>"
    Then it should be "<url>"

  Examples:
   |  input_url                   | protocol      | url                   |
   |  http://google.com           | https         | https://google.com/   |
   |  http://google.com           | ftp           | ftp://google.com/     |
   |  http://google.com           | file          | file://google.com/    | 
