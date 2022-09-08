/*
 ******************************************************************************
 * Cucumber/Gherkin
 ******************************************************************************
*/
const assert = require('assert');
const path = require('path');
const {After, Given, When, Then} = require('@cucumber/cucumber');
// const Browser = require("../../../systemTests/jestTests/Browser.js");
// const { Browser } = require('selenium-webdriver');

After({timeout: 8000}, async function() {
    if (this.browser.browserBuilt()) {
        await this.browser.browserExit();
    }
});

Given('the {word} webpage', async function(page) {
    const absolutePath = path.resolve('./'+page+'.html');
    const forwardSlashed = absolutePath.replace(/\\/g, '/');
    this.browser.browserBuild();
    await this.browser.browserNavigate('file:///'+forwardSlashed);
});


// Given("Login webpage has loaded", async function(value) {
//     await Browser.browserNavigate('http://localhost:8080');
//     // let caps = new Capabilities();
//     // caps.setPageLoadStrategy("normal");
//     // let driver = await env.builder().withCapabilities(caps).build();

//     // await driver.get('http://localhost:8080');

//     // driver.quit();
// });

Then('webpage should have a {inputname} input', async function(inputname) {
    // await Browser.browserNavigate('http://localhost:8080');
    const element = await this.getElement(inputname);
    //const tagname = await element.getTagName();
    expect(element).toBe('username');
    //expect(tagname).toBe()
});