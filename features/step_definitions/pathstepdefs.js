const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const Url = require('../../url');

//Path is /
Given('path is {string}', function (path) {
    this.url = new Url(path);
});

When('redirect to {string}', function (newPath) {
    this.url.path = newPath;
});

Then('new url should be {string}', function (expectedAnswer) {
    assert.strictEqual(this.url.toString(), expectedAnswer);
});

