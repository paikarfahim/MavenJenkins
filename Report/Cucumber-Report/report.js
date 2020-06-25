$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/login.feature");
formatter.feature({
  "line": 1,
  "name": "Test login funtionality",
  "description": "As a valid user, I should be able to login to the application",
  "id": "test-login-funtionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "As a valid user I should be able to login to the application",
  "description": "",
  "id": "test-login-funtionality;as-a-valid-user-i-should-be-able-to-login-to-the-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I go to the application",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should see the logo",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I enter valid username",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I enter valid password",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should see the logout link",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.i_open_the_browser()"
});
formatter.result({
  "duration": 78755800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.i_go_to_the_application()"
});
formatter.result({
  "duration": 1574000,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat stepDefinition.LoginTest.i_go_to_the_application(LoginTest.java:19)\r\n\tat ✽.When I go to the application(feature/login.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginTest.i_should_see_the_logo()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.i_enter_valid_username()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.i_enter_valid_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.i_click_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.i_should_see_the_logout_link()"
});
formatter.result({
  "status": "skipped"
});
});