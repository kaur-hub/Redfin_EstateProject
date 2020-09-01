package com.qa.pages;


  

import java.io.IOException;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.utils.TestBase;

public class Homepage1 extends TestBase{
	
	
	@FindBy(id="search-box-input")
	WebElement searchBox;
	
	@FindBy(className="guts")
	WebElement Popup;
	
	@FindBy(tagName="a")
	List <WebElement> cityList;
	
	
	
	
	public Homepage1()  {
		PageFactory.initElements(driver, this);
	}
		
//		validating homepage
		public String validateHomePage() {
			return driver.getTitle();
		}
		
//		entering text in searchbox
		public void enterTextSearchBox(String cityName) throws InterruptedException
		{
			searchBox.sendKeys(cityName);
			searchBox.sendKeys(Keys.ENTER);
			logger.info("Text entered in textbox and pressed enter");
		}
	
//		validating popup appears
		public boolean popupValidation() {
			return Popup.isDisplayed();
		
		
		//String text=Popup.getText();
		//System.out.println(text);
		// Assert.assertTrue(  "Did You Mean"));
		}
		
		
//		select city from popup
		public  RealEstatePage1 selectCityFromPopUp(String cityToBeSelected ) throws IOException, InterruptedException
		{
			  List<WebElement> anchors = driver.findElements(By.tagName("a"));
			  for(WebElement city : anchors) {
				  String attributeValue=city.getAttribute("href");
				 
			        if(cityToBeSelected.equals(attributeValue)) {
			        	 
			        	JavascriptExecutor executor = (JavascriptExecutor)driver;
					    executor.executeScript("arguments[0].click();", city);
					    logger.info("city selected from popup");
			            break;
			        }
			  }
			return new RealEstatePage1();
		}
	
}
