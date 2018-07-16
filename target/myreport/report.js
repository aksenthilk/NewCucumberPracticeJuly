$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("G:/SeleniumCucumberWorkSpace/NewCucumberPracticeJuly/src/main/java/com/sen/features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login into Free CRM",
  "description": "",
  "id": "login-into-free-crm",
  "keyword": "Feature"
});
formatter.before({
  "duration": 36293588776,
  "status": "passed"
});
formatter.before({
  "duration": 309243890,
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
  "name": "User is on Free CRM Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_is_on_Free_CRM_Home_page()"
});
formatter.result({
  "duration": 4490634491,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Login with valid user credentials",
  "description": "",
  "id": "login-into-free-crm;login-with-valid-user-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@smoke"
    },
    {
      "line": 6,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User submits valid \"naveenk\" and \"test@123\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user lands on CRMPRO page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "naveenk",
      "offset": 20
    },
    {
      "val": "test@123",
      "offset": 34
    }
  ],
  "location": "Steps.user_submits_valid_and(String,String)"
});
formatter.result({
  "duration": 27419479754,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_lands_on_CRMPRO_page()"
});
formatter.result({
  "duration": 39418749,
  "status": "passed"
});
formatter.after({
  "duration": 1542936032,
  "status": "passed"
});
formatter.before({
  "duration": 17774013004,
  "status": "passed"
});
formatter.before({
  "duration": 23655913,
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
  "name": "User is on Free CRM Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_is_on_Free_CRM_Home_page()"
});
formatter.result({
  "duration": 26437563,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 10,
      "value": "#Then user logouts by closing the browser"
    }
  ],
  "line": 13,
  "name": "Login with wrong user name",
  "description": "",
  "id": "login-into-free-crm;login-with-wrong-user-name",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@sanity"
    },
    {
      "line": 12,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User submits invalid username and valid password",
  "rows": [
    {
      "cells": [
        "senthil",
        "test@123"
      ],
      "line": 15
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user stays on the Home page",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_submits_invalid_and_valid(DataTable)"
});
formatter.result({
  "duration": 511092324,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@name\u003d\u0027passwordd\u0027]\"}\n  (Session info: chrome\u003d67.0.3396.99)\n  (Driver info: chromedriver\u003d2.35.528161 (5b82f2d2aae0ca24b877009200ced9065a772e73),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 52 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027LAPTOP-VDF4BQTI\u0027, ip: \u0027192.168.1.208\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.35.528161 (5b82f2d2aae0ca24b877009200ced9065a772e73), userDataDir\u003dC:\\Users\\Senthil\\AppData\\Local\\Temp\\scoped_dir10220_7220}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d67.0.3396.99, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 7686e25e78b892b41e93ab2f34ff0b2c\n*** Element info: {Using\u003dxpath, value\u003d//input[@name\u003d\u0027passwordd\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat com.sen.stepDefs.Steps.user_submits_invalid_and_valid(Steps.java:108)\r\n\tat ✽.When User submits invalid username and valid password(G:/SeleniumCucumberWorkSpace/NewCucumberPracticeJuly/src/main/java/com/sen/features/Login.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.user_stays_on_the_Home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Scenario is finished");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 3065936987,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 17,
      "value": "#Then user logouts by closing the browser"
    }
  ],
  "line": 20,
  "name": "Login with wrong password",
  "description": "",
  "id": "login-into-free-crm;login-with-wrong-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@env"
    },
    {
      "line": 19,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User submits valid \"\u003cusername\u003e\" and invalid \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user stays on Home page",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 23,
      "value": "#Then user logouts by closing the browser"
    }
  ],
  "line": 24,
  "name": "",
  "description": "",
  "id": "login-into-free-crm;login-with-wrong-password;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 25,
      "id": "login-into-free-crm;login-with-wrong-password;;1"
    },
    {
      "cells": [
        "naveenk",
        "senthil"
      ],
      "line": 26,
      "id": "login-into-free-crm;login-with-wrong-password;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13370496140,
  "status": "passed"
});
formatter.before({
  "duration": 47946033,
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
  "name": "User is on Free CRM Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_is_on_Free_CRM_Home_page()"
});
formatter.result({
  "duration": 44957333,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Login with wrong password",
  "description": "",
  "id": "login-into-free-crm;login-with-wrong-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@env"
    },
    {
      "line": 19,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User submits valid \"naveenk\" and invalid \"senthil\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user stays on Home page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "naveenk",
      "offset": 20
    },
    {
      "val": "senthil",
      "offset": 42
    }
  ],
  "location": "Steps.user_submits_valid_and_invalid(String,String)"
});
formatter.result({
  "duration": 960089274,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@value\u003d\u0027Loginn\u0027]\"}\n  (Session info: chrome\u003d67.0.3396.99)\n  (Driver info: chromedriver\u003d2.35.528161 (5b82f2d2aae0ca24b877009200ced9065a772e73),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 56 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027LAPTOP-VDF4BQTI\u0027, ip: \u0027192.168.1.208\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.35.528161 (5b82f2d2aae0ca24b877009200ced9065a772e73), userDataDir\u003dC:\\Users\\Senthil\\AppData\\Local\\Temp\\scoped_dir3876_31372}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d67.0.3396.99, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 6bc955b5f025d1ab50e2b5f0fa24c73d\n*** Element info: {Using\u003dxpath, value\u003d//input[@value\u003d\u0027Loginn\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat com.sen.stepDefs.Steps.user_submits_valid_and_invalid(Steps.java:125)\r\n\tat ✽.When User submits valid \"naveenk\" and invalid \"senthil\"(G:/SeleniumCucumberWorkSpace/NewCucumberPracticeJuly/src/main/java/com/sen/features/Login.feature:21)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.user_stays_on_Home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Scenario is finished");
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 6440307385,
  "status": "passed"
});
});