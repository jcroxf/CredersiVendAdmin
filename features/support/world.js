const cucumber = require("@cucumber/cucumber");
const Browser = require("../../testing/systemTests/jestTests/Browser");

class CustomWorld {
    constructor() {
        this.browser = new Browser();
        // this.fibonacci = new Fibonacci();
        this.thrown = false;
    }

    hasThrown() {
        return this.thrown;
    }

    itThrew() {
        this.thrown = true;
    }
}

cucumber.setWorldConstructor(CustomWorld);