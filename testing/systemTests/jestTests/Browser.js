require('chromedriver'); // So executable is available
const chrome = require('selenium-webdriver/chrome');
const webdriver = require('selenium-webdriver');

/**
 * Convienience class to make selenium simpler
 */
class Browser {
    constructor() {
        this.headless = null;
    }

    /**
     * Constructs an emulated 'headless' Chrome browser
     */
    browserBuild() {
        const options = new chrome.Options()
            .addArguments('--log-level=1')
            .headless()
            .setAcceptInsecureCerts(true)
            .windowSize({width: 1920, height: 1200});

        this.headless = new webdriver.Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();
    }

    /**
     * Simply returns true if 'headless' chrome browser built
     */
    browserBuilt() {
        return (this.headless != null) ? true : false;
    }

    /**
     * Emulates closing the 'headless' Chrome browser
     */
    async browserExit() {
        await this.headless.quit();
        this.headless = null;
    }

    /**
     * Navigates to specified URL in the 'headless' Chrome browser
     */
    async browserNavigate(url) {
        await this.headless.get(url);
    }

    /**
     * Emulates clicking element of the specified id
     */
    async elementClick(id) {
        const element = await this.getElement(id);
        element.click();
    }

    /**
     * Returns color of specified element as a string in the format:
     * 'rgba(<red>, <green>, <blue>, <alpha transparency>)'
     */
    async elementColor(id) {
        const element = await this.getElement(id);
        return await element.getCssValue('color');
    }
    async elementDec(id) {
        const element = await this.getElement(id);
        return await element.getCssValue('text-decoration');
    }

    /**
     * Emulates hovering the mouse over the element of the specified id
     */
    async elementHover(id) {
        const element = await this.getElement(id);
        const actions = this.headless.actions({async: true});
        await actions.move({origin: element}).perform();
    }

    // async elementHoverFirstChild(id) {
    //     const element = await this.getElement(id);
    //     const actions = this.headless.actions({async: true});
    //     await actions.move({origin: element}).perform();
    // }

    // async getElementChild(id) {
    //     const selector = webdriver.By.id(id);
    //     return await this.headless.findElement(selector);
    // }

    /**
     * Convienience method for retrieving headless element by id
     */
    async getElement(id) {
        const selector = webdriver.By.id(id);
        return await this.headless.findElement(selector);
    }

    async getElementByTagName(tagName) {
        const selector = webdriver.By.tagName(tagName);
        return await this.headless.findElement(selector);
    }

    /**
     * Convienience method for retrieving headless element by CSS
     */
    async getElementByCss(css) {
        const selector = webdriver.By.css(css);
        return await this.headless.findElement(selector);
    }
    
    /**
     * To know when a page has loaded, it's useful to wait for an element to exist
     */
    async waitForElementByCss(css, timeout) {
        const selector = webdriver.By.css(css);
        await this.headless.wait(webdriver.until.elementLocated(selector), timeout, 2000);
    }
}

module.exports = Browser;