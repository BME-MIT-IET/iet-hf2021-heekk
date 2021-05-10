const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const Url = require('../../url');

Given('original Url is {string}', function (input_url) {
    this.url = new Url(input_url);
});

When('hash set to {string}', function (hash) {
    this.url.hash = hash;
});

Then('new Url with hash is {string}', function (url) {
    assert.strictEqual(this.url.toString(), url);
});

