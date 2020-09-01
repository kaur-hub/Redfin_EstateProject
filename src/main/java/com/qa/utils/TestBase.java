package com.qa.utils;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;



public class TestBase {
	public  static WebDriver driver;
	public  static Properties prop;
 
	//public  static ExtentReports reports;

	public  static Logger logger;

	// initializing extent report
	/*public void propertyExtentSetup() throws IOException {
        // extent report
		String filename = new SimpleDateFormat("'redfin_'yyyyMMddHHmmSS'.html'").format(new Date());
		String path = System.getProperty("user.dir")+("test-output\\Redfin_ExtentReport") + filename;
		reports = new ExtentReports(path);
		}*/

	public static void setup() throws IOException {
	 logger=Logger.getLogger("Redfin_EstateV001Project");
		 PropertyConfigurator.configure("log4j.properties");
		prop = new Properties();
		FileInputStream file = new FileInputStream(
		System.getProperty("user.dir") + ("\\src\\main\\java\\com\\qa\\config\\config.properties"));
		prop.load(file);

		String br = prop.getProperty("browser");
		if (br.equals("chrome")) {
			System.setProperty("webdriver.chrome.driver", prop.getProperty("chromepath"));
			driver = new ChromeDriver();
		}
		/*
		 * else if(br.equals("firefox")) {
		 * System.setProperty("webdriver.gecko.driver",readconfig.getFirefoxPath
		 * ()); driver = new FirefoxDriver(); } else if(br.equals("ie")) {
		 * System.setProperty("webdriver.ie.driver",readconfig.getIEPath());
		 * driver = new InternetExplorerDriver(); }
		 */
		driver.manage().window().maximize();
		driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

	}

}
