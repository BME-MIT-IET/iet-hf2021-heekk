Feature: Query modifications
  Test out all the query modifications.

  Scenario Outline: Query
    Given query is "<input_url>" 
    When query set to "<query_name>", "<query_value>"
    Then the new url with query should be "<url>"

  Examples:
   |  input_url                   | query_name      | query_value |  url                            |
   |  http://google.com           | a               | 1           |  http://google.com/?a=1         |
   |  http://google.com?a=1       | b               | 2           |  http://google.com/?a=1&b=2     |
   |  http://google.com           | c               | [1,2,3]     |  http://google.com/?c=1&c=2&c=3 | 
