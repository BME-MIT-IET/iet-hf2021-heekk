Feature: Hash modifications
  Test out the hash modification.

  Scenario Outline: Hash
    Given original Url is "<input_url>" 
    When hash set to "<hash>"
    Then new Url with hash is "<url>"

  Examples:
   | input_url                     | hash | url                                |
   | http://google.com             | alma | http://google.com/#alma            |
   | http://google.com/asd         | alma | http://google.com/asd#alma        |
   | http://google.com/asdasd?a=2  | alma | http://google.com/asdasd?a=2#alma | 
