const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const Url = require('../../url');

//Query
Given('query is {string}', function (input_url) {
    this.url = new Url(input_url);
});

When('query set to {string}, {string}', function (query_name, query_value) {
    this.url.query[query_name] = JSON.parse(query_value);
});

Then('I should be told {string}', function (url) {
    assert.strictEqual(this.url.toString(), url);
});
