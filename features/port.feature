Feature: Port modifications
  Test out the port modification.

  Scenario Outline: Port
    Given URL is "<input_url>" 
    When port set to "<port>"
    Then the full url should be "<url>"

  Examples:
   |  input_url                   | port        | url                       |
   |  http://google.com           | 8080        | http://google.com:8080/   |
   |  http://google.com           | 443         | http://google.com:443/    |
   |  http://google.com           | 80          | http://google.com:80/     | 
