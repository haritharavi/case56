package casestudy;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;

public class casustudy56 {
	WebDriver driver;
	@Given("open testme app")
	public void open_testme_app() {
		System.setProperty("webdriver.chrome.driver","C:\\eclipse_browsers\\chromedriver.exe");
		driver=new ChromeDriver();
		  driver.get("http://10.232.237.143:443/TestMeApp/login.htm");
	    
	}

	@Given("enter username as {string}")
	public void enter_username_as(String un) {
		driver.findElement(By.xpath("//*[@id='userName']")).sendKeys(un);
	}

	@Given("enter password as {string}")
	public void enter_password_as(String pd) {
		driver.findElement(By.xpath("//*[@id='password']")).sendKeys(pd);
	}

	@Given("click login")
	public void click_login() {
		 driver.findElement(By.name("Login")).click();
	}

	@Given("verify login")
	public void verify_login() {
		Assert.assertEquals("Home",driver.getTitle());
		  System.out.println("Successfully logged");
	}


}
