package com.qa.stepDefinition;

import java.io.IOException;

import org.testng.Assert;

import com.qa.pages.Homepage1;
import com.qa.pages.RealEstatePage1;
import com.qa.utils.TestBase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class steps1 extends TestBase {
	Homepage1 homepage;
	RealEstatePage1 realestatePage;
	@Given("^user open Browser$")
	public void user_open_Browser() throws Throwable {
	   TestBase.setup();
	}

	@When("^user enter url$")
	public void user_enter_url() throws Throwable {
		 driver.get(prop.getProperty("url"));
	}
	@Then("^verify the home page using \"([^\"]*)\"$")
	public void verify_the_home_page_using(String expectedResult) throws IOException {
		homepage=new Homepage1();
		String ActualTitle = homepage.validateHomePage();
		
		Assert.assertEquals(ActualTitle, "Real Estate, Homes for Sale, MLS Listings, Agents | Redfin");}
		//Assert.assertTrue(result);}


@When("^enter the \"([^\"]*)\" in searchbox and press the enter$")
public void enter_the_in_searchbox_and_press_the_enter(String cityName) throws Throwable {
   homepage.enterTextSearchBox(cityName);
}

	@Then("^validate pop up appears$")
	public void validate_pop_up_appears() throws Throwable {
		boolean text=homepage.popupValidation();
		System.out.println(text);
	}

	@When("^On the pop up select the entry \"([^\"]*)\"$")
	public void on_the_pop_up_select_the_entry(String SelectionFromPopUp) throws Throwable {
		realestatePage=  homepage.selectCityFromPopUp(SelectionFromPopUp);
	}

	@Then("^verify the city Real Estate page using \"([^\"]*)\"$")
	public void verify_the_city_Real_Estate_page_using(String estatePageHeader) throws Throwable {
		realestatePage.validateEstatePageHeader(estatePageHeader);
	}

	@Then("^assert the Search box on the top left side has \"([^\"]*)\"$")
	public void assert_the_Search_box_on_the_top_left_side_has(String expectedCityTag) throws Throwable {
		   realestatePage.validateCityTag(expectedCityTag);
	}

	@When("^Select the min price as \"([^\"]*)\" and max price as \"([^\"]*)\"$")
	public void select_the_min_price_as_and_max_price_as(String MinPrice, String MaxPrice) throws Throwable {
		realestatePage.enterMinValue(MinPrice);
		realestatePage.enterMaxValue(MaxPrice);
	}

	@Then("^Verify all the homes listed are from \"([^\"]*)\", if no homes listed throw an errorMessage$")
	public void verify_all_the_homes_listed_are_from_if_no_homes_listed_throw_an_errorMessage(String expectedResult) throws Throwable {
		realestatePage.validatesearchResult(expectedResult);
	}

}
