package com.qa.pages;

 
 
	import java.util.List;

	import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

import org.openqa.selenium.support.FindBy;
	import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import com.qa.utils.TestBase;


	public class RealEstatePage1 extends TestBase {


		@FindBy(xpath = "//h1[contains(text(),'Sunnyvale Real Estate')]")
		WebElement estatePageHeader;

		@FindBy(className = "textContent")
		WebElement cityTag;

		@FindBy(xpath = "//span[@class='field select Select quickMinPrice withFlyout withOptions mounted selected clickable optional']/span[@class='input']/span/span")
		WebElement minimumPrice;
		
		@FindBy(xpath = "//span[@class='field select Select quickMaxPrice withFlyout withOptions mounted selected clickable optional']/span/span/span")
		WebElement maximumPrice;

		@FindBy(xpath = "//div[@class='homecards']//a")
		List<WebElement> listOfHomes;

		public RealEstatePage1()  {
			PageFactory.initElements(driver, this);
		}

//		validating RealEstate page
		public String validateRealEstatePage() {
			return driver.getTitle();
			
		}

//		validating cityEstatePage
		public void validateEstatePageHeader(String expectedHeader) throws InterruptedException {
			Thread.sleep(3000);
			String actualHeader = estatePageHeader.getText();
			System.out.println(actualHeader);
			Assert.assertEquals(actualHeader, expectedHeader, "EstatePageHeader");
			logger.info("validate Real Estate Page Header");
		}

//		validating city name on left corner in search box
		public void validateCityTag(String expectedTag) {
			String actualTag = cityTag.getText();
			System.out.println(actualTag);
			Assert.assertEquals(actualTag, expectedTag);
		}

//		entering minimum value
		public void enterMinValue(String value) throws InterruptedException {
			Thread.sleep(3000);
			 minimumPrice.click();
			//Thread.sleep(5000);
			int index=Integer.parseInt(value);		
			Thread.sleep(5000);
			JavascriptExecutor je = (JavascriptExecutor) driver;
			
			je.executeScript("document.getElementsByClassName('option')["+index+"].click();");
//The getElementsByClassName() method returns a collection of all elements in the document
			//with the specified class name,
		       
		       logger.info("minimum value entered");
		
		}

//		entering maximum value
		public void enterMaxValue(String Value) throws InterruptedException {

			Thread.sleep(3000);
			 maximumPrice.click();
			Thread.sleep(5000);
			int index=Integer.parseInt(Value);	
			Thread.sleep(5000);
			JavascriptExecutor je = (JavascriptExecutor) driver;
			je.executeScript("document.getElementsByClassName('option')["+index+"].click()");
			
			
			//je.executeScript("document.getElementsByClassName('option')["+index+"].click();" );
			logger.info("maximum value entered");
		}

//		validating search result
		public void validatesearchResult(String expectedResult) {
    
			if (listOfHomes.size() == 0) {
				logger.info("No data to test");
				Assert.assertTrue(true, "no data to test");
			} else {
				boolean b = true;
				for (WebElement result : listOfHomes) {
					if (result.getAttribute("href").contains(expectedResult)) {
						b = true;
					} else {
						b = false;
						break;
					}
				}

				if (b) {
					logger.info("All results  match to search item");
				} else {
					logger.info("All results do not  match to search item");
				}
			}

		}
}
