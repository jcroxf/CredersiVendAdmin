/*
 ******************************************************************************
 * Cucumber/Gherkin
 * ============================================================================
 * 
 * NOTES:
 * - Arrow functions not supported by cucumber when accessing the 'world' class
 *   SEE: github.com/cucumber/cucumber-js/blob/main/docs/support_files/world.md
 * 
 ******************************************************************************
*/

const assert = require('assert');
const {Given, When, Then} = require('@cucumber/cucumber');

// ----------------------------------------------------------------------------
// Steps for the first & second learning outcomes
// ----------------------------------------------------------------------------

// Given("a fibonacci sequence initialized to {int}", function(value) {
//     this.fibonacci.init(value);
// });

// When("a fibonacci sequence is started", function() {
//     // Nothing to do, as done by the custom world
// });

// When("a fibonacci sequence is initialized to {int}", function(value) {
//     try {
//         this.fibonacci.init(value);
//     } catch {
//         this.itThrew();
//     }
// });

// When("the sequence is skipped {int} time(s)", function(value) {
//     this.fibonacci.skip(value);
// });

// Then("the next {word} should be {}", function(action, value) {
//     switch(action) {
//         case "number":
//             assert(this.fibonacci.next() == parseInt(value));
//             break;
        
//         case "sequence":
//             value.split(",").forEach((expected) => {
//                 assert(this.fibonacci.next() == parseInt(expected.trim()));
//             });
//             break;
        
//         default:
//             throw new Error(`Unsupported action ${action}`);
//     }
// });

// Then("it should throw an exception", function() {
//     assert(this.hasThrown());
// });

// Then("the state should be {string}", function(value) {
//     assert(this.fibonacci.state() == value);
// });

// 
// 
// 
// 

Given("${object} has loaded", async function(value) {
    let caps = new Capabilities();
    caps.setPageLoadStrategy("normal");
    let driver = await env.builder().withCapabilities(caps).build();

    await driver.get('http://localhost:8080');

    driver.quit();
});

Then("${page} ${object} should have a ${htmlElementName} ${htmlElementFunction}", function(value) {

});