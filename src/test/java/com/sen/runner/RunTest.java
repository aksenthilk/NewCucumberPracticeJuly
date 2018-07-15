package com.sen.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "G:\\SeleniumCucumberWorkSpace\\NewCucumberPracticeJuly\\src\\main\\java\\com\\sen\\features\\Login.feature",
         glue = {"com/sen/stepDefs"},
         plugin={"com.cucumber.listener.ExtentCucumberFormatter:output/report.html","pretty","html:target/selenium-report.html","json:target/json-report.json","junit:target/junit-report.xml"},
         strict =true,
         dryRun = false
         ,monochrome = true
        // ,name = {"wrong"}// name tag
        // ,tags = {"@sanity"}
         )
public class RunTest {

}

//cucumber.api.PendingException:TODO:implement me

//Tags are be case sensitive.Following error is thrown if wrong tag name is given

//None of the features at [G:\SeleniumCucumberWorkSpace\NewCucumberPracticeJuly\src\main\java\com\sen\features\Login.feature] 
//matched the filters: [@Regression]

//tags = {"@regression,@env"} ---> OR Operation

//tags = {"@regression","@env"}---> ANd Operation

//@RunWith(Cucumber.class) tells JUnit to not run this test class with it's default runner, but instead with Cucumber which is a test runner for JUnit4 that runs Cucumber from within JUnit.
//@CucumberOptions tells Cucumber where to find its stuff. The main things are:
//features tells Cucumber where to find the feature files.
//glue tells Cucumber which packages contain the step definitions.

//To generate Extent report,Add two dependencies:
// 1)extentreports 2)cucumber-extentsreport and add the below code:
//"com.cucumber.listener.ExtentCucumberFormatter:output/report.html"




