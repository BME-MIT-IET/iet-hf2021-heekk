Feature: Path modifications
  Test out all the path modifications.

  Scenario Outline: Path
    Given path is "<input_url>" 
    When redirect to "<path>"
    Then new url should be "<url>"

  Examples:
   |  input_url                   | path                | url                                   |
   |  http://google.com           | /newpath            | http://google.com/newpath             |
   |  http://google.com           | /newpath/anotherone | http://google.com/newpath/anotherone  |
   |  http://google.com/asd       | /                   | http://google.com/                    | 
