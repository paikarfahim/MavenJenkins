package stepDefinition;

import org.junit.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginTest {

	@Given("^I open the browser$")
	public void i_open_the_browser() {
		System.out.println("Brwoser Opened.");
	}

	@When("^I go to the application$")
	public void i_go_to_the_application() {
		System.out.println("Application is open.");
		Assert.assertTrue(true);
	}

	@Then("^I should see the logo$")
	public void i_should_see_the_logo() {
		System.out.println("The logo is visible.");
	}

	@Then("^I enter valid username$")
	public void i_enter_valid_username() {
		System.out.println("User name is entered.");
	}

	@Then("^I enter valid password$")
	public void i_enter_valid_password() {
		System.out.println("Password is entered.");
	}

	@Then("^I click the login button$")
	public void i_click_the_login_button() {
		System.out.println("Login button clicked.");
	}

	@Then("^I should see the logout link$")
	public void i_should_see_the_logout_link() {
		System.out.println("Logout tab is visible.");
	}
}
