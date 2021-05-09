const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const Url = require('../../url');

Given('Url is {string}', function (input_url) {
    this.url = new Url(input_url);
});

When('host set to {string}', function (host) {
    this.url.host = host;
});

Then('new Url is {string}', function (url) {
    assert.strictEqual(this.url.toString(), url);
});

