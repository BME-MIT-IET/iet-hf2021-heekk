const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const Url = require('../../url');

//Port
Given('URL is {string}', function (input_url) {
    this.url = new Url(input_url);
});

When('port set to {string}', function (port) {
    this.url.port = port;
});

Then('the full url should be {string}', function (url) {
    assert.strictEqual(this.url.toString(), url);
});