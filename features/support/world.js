const cucumber = require("@cucumber/cucumber");
const Browser = require("./Browser");

class Customworld {
    constructor() {
        this.browser = new Browser();
        this.thrown = false;
    }
    hasthrown() {
        return this.thrown;
    }
    itsThrew() {
        this.thrown = true;
    }
}
cucumber.setWorldConstructor(Customworld);