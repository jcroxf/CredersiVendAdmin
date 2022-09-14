/*
 ******************************************************************************
 * Cucumber/Gherkin
 ******************************************************************************
*/
const assert = require('assert');
const path = require('path');
const { Before, After, Given, When, And, Then } = require('@cucumber/cucumber');
// const Browser = require("../../../systemTests/jestTests/Browser.js");
// const { Browser } = require('selenium-webdriver');




After({ timeout: 8000 }, async function () {
    if (this.browser.browserBuilt()) {
        await this.browser.browserExit();
    }
});

// Given('the {word} webpage', async function (page) {
//     const absolutePath = path.resolve('./' + page + '.html');
//     const forwardSlashed = absolutePath.replace(/\\/g, '/');
//     this.browser.browserBuild();
//     await this.browser.browserNavigate('file:///' + forwardSlashed);
// });


// Given("Login webpage has loaded", async function(value) {
//     await Browser.browserNavigate('http://localhost:8080');
//     // let caps = new Capabilities();
//     // caps.setPageLoadStrategy("normal");
//     // let driver = await env.builder().withCapabilities(caps).build();

//     // await driver.get('http://localhost:8080');

//     // driver.quit();
// });

// Then('webpage should have a {inputname} input', async function (inputname) {
//     // await Browser.browserNavigate('http://localhost:8080');
//     const element = await this.getElement(inputname);
//     //const tagname = await element.getTagName();
//     expect(element).toBe('username');
//     //expect(tagname).toBe()
// });


Given('I have logged in', async function () {
    this.browser.browserBuild();
    await this.browser.browserNavigate('http://localhost:8080/');
    const loginWebPage = await this.browser.getElementByCss('h1');
    await loginWebPage.isDisplayed();
    const username = await this.browser.getElement('username');
    await username.sendKeys('admin')
    const password = await this.browser.getElement('password');
    await password.sendKeys('HelloWorld')
    const loginButton = await this.browser.getElementByCss('content > div:nth-child(3) > button');
    loginButton.click();
    await this.browser.waitForElementByCss('items', 50000)
    //expect(element).toBe('logo');
})

When("I click on create customer button", async function () {
    const createCustomerButton = await this.browser.getElementByTagName('button');
    createCustomerButton.click();
    //.svelte-11k7gva > component > bar > button
    //content.svelte-11k7gva > component > bar.svelte-1wjkpl5 > button
})

When("I enter new customer company name", async function () {
    const inputCustomerNewName = await this.browser.getElementByTagName('input');
    inputCustomerNewName.sendkey = 'Alec';
})

When("I click on ok", async function () {
    //await waitForElementByCss('fields > buttons:nth-child(2)', 5000);
    const okButton = await this.browser.getElementByCss('fields > buttons > button:nth-child(2)')
    okButton.click();
    // button may be referring to cancel button issue caused here.
    //content > component > items > item > span > create > 
})

Then("you have the new customer company name displayed", async function () {
    const newCustomer = await this.browser.getElementByTagName('item');
    newCustomer.isDisplayed();
})

Given("the webpage has loaded", async function () {
    this.browser.browserBuild();
    await this.browser.browserNavigate('http://localhost:8080/');
    const loginWebPage = await this.browser.getElementByCss('h1');
    loginWebPage.isDisplayed();
})

Then("Webpage should have a title", async function () {
    const webpageTitle = await this.browser.getElementByCss(' body.main > header > h1');
    webpageTitle.isDisplayed();
    const checkwebpageTitle = await webpageTitle.isDisplayed()
    assert(checkwebpageTitle == true) 
})


Then("Webpage should have a username inputbox", async function () {
    const username = await this.browser.getElement("username")
    username.isDisplayed();
    const checksUsername = await username.isDisplayed()
    assert(checksUsername == true)
})

Then("Webpage should have a password inputbox", async function () {
    const password = await this.browser.getElement("password")
    password.isDisplayed();
    const checkspassword = await password.isDisplayed();
    assert(checkspassword == true)
})
Then("Webpage should have a login button", async function () {
    const loginButton = await this.browser.getElementByCss(' content > div:nth-child(3) > button')
    loginButton.isDisplayed();
    const checksloginbutton = await loginButton.isDisplayed();
    assert(checksloginbutton == true);
})

Then("Webpage should have a username label", async function () {
    const usernamelabel = await this.browser.getElement('username')
    usernamelabel.isDisplayed();
    const checksUsernameLabel = await usernamelabel.isDisplayed();
    assert(checksUsernameLabel == true);
})

Then("Webpage should have a password label", async function () {
    const passwordlabel = await this.browser.getElement('password')
    passwordlabel.isDisplayed();
    const checksPasswordLabel = await passwordlabel.isDisplayed();
    assert(checksPasswordLabel == true);
})

Then("Credersi logo has loaded", async function () {
    const credersiLogo = await this.browser.getElementByTagName('img')
    const displayed = await credersiLogo.isDisplayed();
    assert(displayed == true);
})


When("username input element exists", async function () {
    const inputElement = await this.browser.getElement('username')
    inputElement.isDisplayed();
})


Then("username input element placeholder text is {string}", async function (value) {
    const inputElement = await this.browser.getElement('username')
    const placeholderText = await inputElement.getAttribute('placeholder');
    //const items = 
    //expect(placeholderText).toBe(string);
    assert(placeholderText == value);
})

When("password input element exist", async function () {
    const inputElement = await this.browser.getElement('password')
    await inputElement.isDisplayed();
})

Then("password input element placeholder text is {string}", async function (value) {
    const inputElement = await this.browser.getElement('password')
    const placeholderText = await inputElement.getAttribute('placeholder');
    //const items = 
    //expect(placeholderText).toBe(string);
    assert(placeholderText == value)
})

When("I click on Customer {string}", async function (value) {
    const customer = await this.browser.getElement('27828019-4e08-42a1-a536-d773ecf83d4d')
    await customer.click();
    await this.browser.waitForElementByCss('items > item:nth-child(3)', 50000)

})

When("the site will be displayed", async function (){
    const site = await this.browser.getElementByCss('items > item:nth-child(3)')
    await site.isDisplayed();
})

When("the create site button is displayed", async function () {
    const siteButton = await this.browser.getElementByTagName('button');
   await siteButton.isDisplayed();
})
When("I click on create site button", async function () {
    const siteButton = await this.browser.getElementByTagName('button')
    await siteButton.click();
})
When("I input site name and site address", async function () {
    const siteName = await this.browser.getElement('placeholder1')
    const siteAddress = await this.browser.getElement('placeholder2')
    siteName.sendkey = 'charlieAndTheCholateFactory';
    siteAddress.sendKey = 'Chorley'
})
Then("the new site will be displayed", async function () {
    const newSiteName = await this.browser.getElementByCss('items > item:nth-child(1)')
    await newSiteName.isDisplayed();
})

When("I click on site {string}", async function (value) {
    await this.browser.waitForElementByCss('items', 50000)
    const site = await this.browser.getElementByCss('items > item:nth-child(1)')
    await site.click();
})

// When("the location will be displayed", async function () {
//     await this.browser.waitForElementByCss('component > item:nth-child(1)', 90000)
//     const location = await this.browser.getElement('f761a664-41fb-4fad-9b3e-470aaee119d6')
//     await location.isDisplayed();
// })


// When(" I click on create machine", async function () {
//     const createMachine = await this.browser.getElementByTagName('button')
//     await createMachine.click()
// })
// When("I enter new machine details", async function () {
// const machineName = await this.browser.getElement('placeholder1')
// const machineLocation = await this.browser.getElement('placeholder2')
// await machineName.sendKeys('machine1');
// await machineLocation.sendKeys('kitchen');
// })

// Then("new machine is displayed", async function () {
// const newMachines = await this.browser.getElementByCss('component > item')
// await newMachines.isDisplayed();
// })