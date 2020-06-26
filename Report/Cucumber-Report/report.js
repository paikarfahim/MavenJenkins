$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Test login funtionality",
  "description": "As a valid user, I should be able to login to the application",
  "id": "test-login-funtionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Test Using Valid Credentials",
  "description": "",
  "id": "test-login-funtionality;test-using-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I enter \"\u003cusername\u003e\" username",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter \"\u003cpassword\u003e\" password",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should see the logout link",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "test-login-funtionality;test-using-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 16,
      "id": "test-login-funtionality;test-using-valid-credentials;;1"
    },
    {
      "cells": [
        "batch03@codegator.us.qa",
        "Pa55word"
      ],
      "line": 17,
      "id": "test-login-funtionality;test-using-valid-credentials;;2"
    },
    {
      "cells": [
        "batch03@codegator.us.qa",
        "Pa55word"
      ],
      "line": 18,
      "id": "test-login-funtionality;test-using-valid-credentials;;3"
    },
    {
      "cells": [
        "batch03@codegator.us.qa",
        "Pa55word"
      ],
      "line": 19,
      "id": "test-login-funtionality;test-using-valid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I Open Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I go to Salesforce application",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should see the Salesforce logo",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.I_Open_Chrome_Browser()"
});
formatter.result({
  "duration": 4263483500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_go_to_Salesforce_application()"
});
formatter.result({
  "duration": 2642296200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_Salesforce_logo()"
});
formatter.result({
  "duration": 90718800,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Test Using Valid Credentials",
  "description": "",
  "id": "test-login-funtionality;test-using-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I enter \"batch03@codegator.us.qa\" username",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter \"Pa55word\" password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should see the logout link",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "batch03@codegator.us.qa",
      "offset": 9
    }
  ],
  "location": "LoginTest.I_enter_username(String)"
});
formatter.result({
  "duration": 141203500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pa55word",
      "offset": 9
    }
  ],
  "location": "LoginTest.I_enter_password(String)"
});
formatter.result({
  "duration": 76066700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_click_the_login_button()"
});
formatter.result({
  "duration": 781127900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_logout_link()"
});
formatter.result({
  "duration": 2244850800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I Open Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I go to Salesforce application",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should see the Salesforce logo",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.I_Open_Chrome_Browser()"
});
formatter.result({
  "duration": 3267199900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_go_to_Salesforce_application()"
});
formatter.result({
  "duration": 2482386700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_Salesforce_logo()"
});
formatter.result({
  "duration": 37224500,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Test Using Valid Credentials",
  "description": "",
  "id": "test-login-funtionality;test-using-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I enter \"batch03@codegator.us.qa\" username",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter \"Pa55word\" password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should see the logout link",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "batch03@codegator.us.qa",
      "offset": 9
    }
  ],
  "location": "LoginTest.I_enter_username(String)"
});
formatter.result({
  "duration": 126920300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pa55word",
      "offset": 9
    }
  ],
  "location": "LoginTest.I_enter_password(String)"
});
formatter.result({
  "duration": 88937600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_click_the_login_button()"
});
formatter.result({
  "duration": 766368600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_logout_link()"
});
formatter.result({
  "duration": 1185316700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I Open Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I go to Salesforce application",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should see the Salesforce logo",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.I_Open_Chrome_Browser()"
});
formatter.result({
  "duration": 3272153000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_go_to_Salesforce_application()"
});
formatter.result({
  "duration": 2504643900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_Salesforce_logo()"
});
formatter.result({
  "duration": 38410300,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Test Using Valid Credentials",
  "description": "",
  "id": "test-login-funtionality;test-using-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I enter \"batch03@codegator.us.qa\" username",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter \"Pa55word\" password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should see the logout link",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "batch03@codegator.us.qa",
      "offset": 9
    }
  ],
  "location": "LoginTest.I_enter_username(String)"
});
formatter.result({
  "duration": 109080600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pa55word",
      "offset": 9
    }
  ],
  "location": "LoginTest.I_enter_password(String)"
});
formatter.result({
  "duration": 75140000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_click_the_login_button()"
});
formatter.result({
  "duration": 747308800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.I_should_see_the_logout_link()"
});
formatter.result({
  "duration": 2797274600,
  "status": "passed"
});
});