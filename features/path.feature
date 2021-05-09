Feature: Path modifications
  Test out all the path modifications.

  Scenario: Path is /
    Given path is "http://google.com/"
    When redirect to "/newpath"
    Then new url should be "http://google.com/newpath"
