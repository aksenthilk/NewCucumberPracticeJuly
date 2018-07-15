package com.sen.stepDefs;

import java.io.File;
import java.io.IOException;
import java.util.List;
import org.apache.commons.io.FileUtils;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import com.cucumber.listener.Reporter;
import cucumber.api.DataTable;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Steps {
	WebDriver driver;
	
	@Before(order = 0)
	public void startUp() {
		System.out.println("This is the FIRST step of the Scenario");
		System.setProperty("webdriver.chrome.driver", "G:\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://www.freecrm.com");

	}

	@After
	public void tearDown(Scenario scenario) throws IOException {
		System.out.println("This is the END of the Scenario");
		if (scenario.isFailed()) {
			scenario.write("Scenario is finished");
			// This step will embed the failed screenshot in the html
				// report-->"index.html"
				scenario.embed(((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES), "image/png");
				File src = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
				File dest = new File("output/" + src.getName());
				try {//// To embed the empty screen shot in the Extent Report
					FileUtils.copyFile(src, dest);
					//Files.copy(src, dest);
				} catch (IOException e) {
					e.printStackTrace();
				}
				try {// To embed the exact failed screen shot in the Extent Report
					Reporter.addScreenCaptureFromPath(dest.getName());
				} catch (IOException e) {
					e.printStackTrace();
				}

			}

		
		driver.close();
	}

	@Before(order = 1)
	@Given("^User is on Free CRM Home page$")
	public void user_is_on_Free_CRM_Home_page() throws Throwable {
		System.out.println("This is the SECOND step of the Scenario");
		// driver.get("http://www.freecrm.com");
		Assert.assertEquals("Free CRM software in the cloud powers sales and customer service", driver.getTitle());

	}

	@When("^User submits valid \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_submits_valid_and(String name, String pwd) throws Throwable {
		driver.findElement(By.xpath("//input[@name='username']")).sendKeys(name, Keys.TAB);
		driver.findElement(By.xpath("//input[@name='password']")).sendKeys(pwd, Keys.TAB);
		driver.findElement(By.xpath("//input[@value='Login']")).click();
		Thread.sleep(3000);

	}

	@Then("^user lands on CRMPRO page$")
	public void user_lands_on_CRMPRO_page() throws Throwable {
		Assert.assertEquals("CRMPRO", driver.getTitle());

	}

	/*
	 * @Then("^user logouts by closing the browser$") public void
	 * user_logouts_by_closing_the_browser() throws Throwable {
	 * driver.switchTo().frame(0); driver.findElement(By.xpath(
	 * "//a[@href='https://www.freecrm.com/index.cfm?logout=1']")).click();
	 * Thread.sleep(3000); driver.switchTo().defaultContent();
	 * 
	 * 
	 * }
	 */
	/*
	 * @Given("^User is on Free CRM page$") public void
	 * user_is_on_Free_CRM_page() throws Throwable {
	 * 
	 * }
	 */

	@When("^User submits invalid username and valid password$")
	public void user_submits_invalid_and_valid(DataTable data) throws Throwable {
		List<List<String>> dat = data.raw();
		driver.findElement(By.xpath("//input[@name='username']")).sendKeys(dat.get(0).get(0), Keys.TAB);
		driver.findElement(By.xpath("//input[@name='passwordd']")).sendKeys(dat.get(0).get(1), Keys.TAB);
		Thread.sleep(2000);
		driver.findElement(By.xpath("//input[@value='Login']")).click();
		Thread.sleep(3000);

	}

	@Then("^user stays on the Home page$")
	public void user_stays_on_the_Home_page() throws Throwable {
		Assert.assertEquals("Free CRM software in the cloud powers sales and customer service", driver.getTitle());

	}

	@When("^User submits valid \"([^\"]*)\" and invalid \"([^\"]*)\"$")
	public void user_submits_valid_and_invalid(String name, String pwd) throws Throwable {
		driver.findElement(By.xpath("//input[@name='username']")).sendKeys(name, Keys.TAB);
		driver.findElement(By.xpath("//input[@name='password']")).sendKeys(pwd, Keys.TAB);
		driver.findElement(By.xpath("//input[@value='Loginn']")).click();
		Thread.sleep(3000);

	}

	@Then("^user stays on Home page$")
	public void user_stays_on_Home_page() throws Throwable {
		Assert.assertEquals("Free CRM software in the cloud powers sales and customer service", driver.getTitle());

	}

}
