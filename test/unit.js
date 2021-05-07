var expect = require('chai').expect;

const Url = require('../url.js');


describe('Query parameter existance', function(){
    it('if parameter not exists isEmptyQuery function should return true',function(){
        var url = new Url("http://google.com");
        
        expect(url.isEmptyQuery()).true;
    });
    it('if parameter exists isEmptyQuery function should return false',function(){
        var url = new Url("http://google.com?q=1");
        
        expect(url.isEmptyQuery()).false;
    });
});

describe('Query array', function(){
    it('query parameter should be empty when used with empty array',function(){
        var url = new Url("http://google.com");
        url.query.a = [];
        var urlToString = url.toString();
        expect(url.isEmptyQuery()).to.be.false;
        expect(url.query.a.length).to.be.equals(0);
        expect(urlToString).to.be.equals("http://google.com/?a=");
    });
    
});


