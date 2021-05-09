const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const Url = require('../../url');

//Protocol
Given('url is {string}', function (input_url) {
    this.url = new Url(input_url);
});

When('protocol set to {string}', function (protocol) {
    this.url.protocol = protocol;
});

Then('it should be {string}', function (url) {
    assert.strictEqual(this.url.toString(), url);
});