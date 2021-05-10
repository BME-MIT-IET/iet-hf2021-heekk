var expect = require('chai').expect;

const Url = require('../url.js');


describe('Query parameter existance', function () {
    it('if parameter not exists isEmptyQuery function should return true', function () {
        var url = new Url("https://google.com");

        expect(url.isEmptyQuery()).true;
    });
    it('if parameter exists isEmptyQuery function should return false', function () {
        var url = new Url("https://google.com?q=1");

        expect(url.isEmptyQuery()).false;
    });
});

describe('Query array', function () {
    it('query parameter should be empty when used with empty array', function () {
        var url = new Url("https://google.com");
        url.query.a = [];
        var urlToString = url.toString();
        expect(url.isEmptyQuery()).to.be.false;
        expect(url.query.a.length).to.be.equals(0);
        expect(urlToString).to.be.equals("https://google.com/?a=");
    });
});

describe('Special characters in path', function () {
    it('Should encode special characters', function () {
        var url = new Url("https://google.com/a áéöőíüóúű");
        expect(url.path).to.be.equal('/a%20%C3%A1%C3%A9%C3%B6%C5%91%C3%AD%C3%BC%C3%B3%C3%BA%C5%B1');
    });

    it('Should decode special characters', function () {
        var url = new Url("https://google.com/%E2%80%A6");
        expect(url.decode(url.toString())).to.be.equal('https://google.com/…');
    });

    it('Should not decode invalid character 3 hex codes', function () {
        var url = new Url("https://google.com/%E0%9f%A6");
        expect(url.decode(url.toString())).to.be.equal('https://google.com/%E0%9f%A6');
    });

    it('Should not decode invalid character 2 hex codes', function () {
        var url = new Url("https://google.com/%C1%9f");
        expect(url.decode(url.toString())).to.be.equal('https://google.com/%C1%9f');
    });
});
