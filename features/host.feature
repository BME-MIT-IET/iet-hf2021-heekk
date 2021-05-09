Feature: Host modifications
  Test out the host modification.

  Scenario Outline: Host
    Given Url is "<input_url>" 
    When host set to "<host>"
    Then new Url is "<url>"

  Examples:
   | input_url                     | host       |  url                         |
   | http://google.com             | yahoo.com  | http://yahoo.com/            |
   | http://google.com/asd         | bing.com   | http://bing.com/asd          |
   | http://google.com/asdasd?a=2  | mit.bme.hu | http://mit.bme.hu/asdasd?a=2 | 
