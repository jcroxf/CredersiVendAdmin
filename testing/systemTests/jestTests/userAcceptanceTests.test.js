const { Actions } = require("selenium-webdriver");
const Browser = require("./Browser");
const browser = new Browser();
const timeout = 20000;

beforeEach(async () => {
    browser.browserBuild();
    await browser.browserNavigate('http://localhost:8080');
}, timeout);

afterEach(async() => {
    await browser.browserExit();
}, timeout);

test("Password field is initially empty", async() => {
    const element = await browser.getElement("password");
    expect(element.value).toBe();
});

test("Initially has a page heading/title", async () => {
    const element =  await browser.getElementByCss("h1");
    expect(element.value).toBe("Credersi-vend Admin Login")
});