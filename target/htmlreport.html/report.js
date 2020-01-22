$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/folder1/casestudy5.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "test login with users",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "open testme app",
  "keyword": "* "
});
formatter.match({
  "location": "casustudy56.open_testme_app()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter username as \"lalitha\"",
  "keyword": "* "
});
formatter.match({
  "location": "casustudy56.enter_username_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter password as \"Password123\"",
  "keyword": "* "
});
formatter.match({
  "location": "casustudy56.enter_password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click login",
  "keyword": "* "
});
formatter.match({
  "location": "casustudy56.click_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify login",
  "keyword": "* "
});
formatter.match({
  "location": "casustudy56.verify_login()"
});
formatter.result({
  "status": "passed"
});
});