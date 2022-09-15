const { placeholder } = require("@babel/types");
const { Actions } = require("selenium-webdriver");
const { Driver } = require("selenium-webdriver/chrome");
const Browser = require("./Browser");
const browser = new Browser();
const timeout = 20000;

beforeEach(async () => {
    browser.browserBuild();
    await browser.browserNavigate('http://localhost:8080');
}, timeout);

afterEach(async () => {
    await browser.browserExit();
}, timeout);

test("Initially has a password box", async () => {
    const element = await browser.getElement("password");
    expect(element.value).toBe()
});

test("Initially has username box", async () => {
    const element = await browser.getElement("username");
    expect(element.value).toBe()
});

test("Initially has a title", async () => {
    const element = await browser.getElementByTag('h1');
    expect(element.value).toBe()
});

test("Initially has a image", async () => {
    const element = await browser.getElementByTag('img');
    expect(element.value).toBe()
});

test("Initially has a login button", async () => {
    const element = await browser.getElementByTag('button');
    expect(element.value).toBe()
});

test("Initially has a username label", async () => {
    const element = await browser.getElementByCss('div>label');
    expect(element.value).toBe()
});

test("Initially has a password label", async () => {
    const element = await browser.getElementByCss('div:nth-child(2)>label');
    expect(element.value).toBe()
});

test("Initially has a username placeholder", async () => {
    const element = await browser.getElement('username');
    const attribute = await element.getAttribute('placeholder');
    expect(attribute).toBe('Enter Username')
});

test("Initially has a password placeholder", async () => {
    const element = await browser.getElement('password');
    const attribute = await element.getAttribute('placeholder');
    expect(attribute).toBe('Enter Password')
});


test("Heading visible once logged in", async () => {
    const usernameIn = "admin";
    const passwordIn = "HelloWorld";
    
    //
    // Emulate searching for the location
    //
    
    const usernameBox = await browser.getElement('username');
    await usernameBox.sendKeys(usernameIn);
    
    const passwordBox = await browser.getElement('password');
    await passwordBox.sendKeys(passwordIn);
    
    const loginBox = await browser.getElementByCss('button');
    await loginBox.click();
    await browser.waitForElementByCss('subheading', timeout/2);
    const element = await browser.getElementByCss('h1');
    expect(element.value).toBe()
});

test("Image visible once logged in", async () => {
    const usernameIn = "admin";
    const passwordIn = "HelloWorld";
    
    const usernameBox = await browser.getElement('username');
    await usernameBox.sendKeys(usernameIn);
    
    const passwordBox = await browser.getElement('password');
    await passwordBox.sendKeys(passwordIn);
    
    const loginBox = await browser.getElementByCss('button');
    await loginBox.click();
    await browser.waitForElementByCss('subheading', timeout/2);
    const element = await browser.getElementByCss('img.logo');
    expect(element.value).toBe()
});

test("Subheading visible once logged in", async () => {
    const usernameIn = "admin";
    const passwordIn = "HelloWorld";
    
    const usernameBox = await browser.getElement('username');
    await usernameBox.sendKeys(usernameIn);
    
    const passwordBox = await browser.getElement('password');
    await passwordBox.sendKeys(passwordIn);
    
    const loginBox = await browser.getElementByCss('button');
    await loginBox.click();
    await browser.waitForElementByCss('subheading', timeout/2);
    const element = await browser.getElementByCss('subheading');
    expect(element.value).toBe()
});

test("Button visible once logged in", async () => {
    const usernameIn = "admin";
    const passwordIn = "HelloWorld";
    
    const usernameBox = await browser.getElement('username');
    await usernameBox.sendKeys(usernameIn);
    
    const passwordBox = await browser.getElement('password');
    await passwordBox.sendKeys(passwordIn);
    
    const loginBox = await browser.getElementByCss('button');
    await loginBox.click();
    await browser.waitForElementByCss('button', timeout/2);
    const element = await browser.getElementByCss('button');
    expect(element.value).toBe()
});

test("Charlie visible once logged in", async () => {
    const usernameIn = "admin";
    const passwordIn = "HelloWorld";
    
    const usernameBox = await browser.getElement('username');
    await usernameBox.sendKeys(usernameIn);
    
    const passwordBox = await browser.getElement('password');
    await passwordBox.sendKeys(passwordIn);
    
    const loginBox = await browser.getElementByCss('button');
    await loginBox.click();
    await browser.waitForElementByCss('items', timeout/2);
    const element = await browser.getElement('27828019-4e08-42a1-a536-d773ecf83d4d');
    expect(element.value).toBe()
});

test("Bravo visible once logged in", async () => {
    const usernameIn = "admin";
    const passwordIn = "HelloWorld";
    
    const usernameBox = await browser.getElement('username');
    await usernameBox.sendKeys(usernameIn);
    
    const passwordBox = await browser.getElement('password');
    await passwordBox.sendKeys(passwordIn);
    
    const loginBox = await browser.getElementByCss('button');
    await loginBox.click();
    await browser.waitForElementByCss('items', timeout/2);
    const element = await browser.getElement('4b6b9e30-b420-45e1-8fb9-0e93ab33caca');
    expect(element.value).toBe()
});

test("Alpha visible once logged in", async () => {
    const usernameIn = "admin";
    const passwordIn = "HelloWorld";
    
    const usernameBox = await browser.getElement('username');
    await usernameBox.sendKeys(usernameIn);
    
    const passwordBox = await browser.getElement('password');
    await passwordBox.sendKeys(passwordIn);
    
    const loginBox = await browser.getElementByCss('button');
    await loginBox.click();
    await browser.waitForElementByCss('items', timeout/2);
    const element = await browser.getElement('a7082b2f-12eb-49d2-a0ea-03885d2f3691');
    expect(element.value).toBe()
});

// test("Username box has a border once clicked", async () => {
//     const element = await browser.getElement('username');
//     const border = await element
//     await element:focus-visible

// });

// 1px solid rgb(204 204 204)