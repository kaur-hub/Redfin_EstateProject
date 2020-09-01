package com.qa.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith (Cucumber.class)
@CucumberOptions(
		
features = { "C:\\Users\\sukhd\\eclipse-workspace\\Redfin_EstateV001Project\\Features\\RedfinApp.feature"},
            
glue = {"com.qa.stepDefinition"},
tags = {"@tag2"},
dryRun=false,
monochrome=true,
format = {
        "pretty",
        "html:target/cucumber-reports/cucumber-pretty",
        "json:target/cucumber-reports/CucumberTestReport.json"})


public class TestRunner {

}
