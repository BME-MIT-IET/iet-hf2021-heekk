'use strict';

const assert = require('assert');
const fs = require('fs');
const p = require('path');
const Url = require('../url.js');

function sanitizeURL (url) {
    var u = new Url(url, true);

    if (u.query['reload']) {
        delete u.query['reload']
    }

    if (u.query['forceReload']) {
        delete u.query['forceReload']
    }

    if (u.query['device']) {
        delete u.query['device']
    }

    if (u.query['testwebid']) {
        delete u.query['testwebid']
    }

    if (u.query['testWebId']) {
        delete u.query['testWebId']
    }

    if (u.query['testWebID']) {
        delete u.query['testWebID']
    }

    if (u.query['timetravel']) {
        delete u.query['timetravel']
    }

    return u.toString();
}

describe('Url()', function () {
    it('should construct an oobject', function () {
        const u = new Url();
        assert.strictEqual(u instanceof Url, true);
    });
    it('should match current dir when construct with no argument', function () {
        const u = new Url();
        let dir = u.path.replace(/\//g, p.sep);
        process.platform.match(/^win/) && (dir = dir.substr(1));
        assert.strictEqual(dir, fs.realpathSync('.'));
    });
    it('should keep URL without transformations if requested', function () {
        assert.strictEqual(
          sanitizeURL('/SearchResults?search=new&make=Buick&year=2016&forceReload=true'),
          '/SearchResults?search=new&make=Buick&year=2016'
        );
    });
    it('should test absolutize url', function () {
        const absoluteUrl = new Url('/foo');
        assert.strictEqual(absoluteUrl.toString(), 'file:///foo');

        const noTransform = new Url('/foo', true);
        assert.strictEqual(noTransform.toString(), '/foo');
    });
});

describe('Url.clearQuery()', function () {
    it('should remove all vars from query string', function () {
        const url = new Url('http://example.com/?a&a=&b=&c=&d=&e=&f=&g=&h#foo');
        url.clearQuery();
        assert.strictEqual('http://example.com/#foo', url.toString());
    });
});

describe('Url.encode(), Url.decode()', function () {
    it('should correctly encode and decode query string params', function () {
        var url1 = new Url('http://localhost/?a=%3F').toString();
        var url2 = new Url('http://localhost/?a=%3f').toString();
        assert.strictEqual(url1.toLowerCase(), url2.toLowerCase());
    });
});

describe('Url.queryLength()', function () {
    it('should correctly return correct query lengths', function () {
        let url = new Url('http://localhost/?a=%3F');
        let queryLength = url.queryLength();
        assert.strictEqual(queryLength, 1);

        url = new Url('http://localhost/');
        queryLength = url.queryLength();
        assert.strictEqual(queryLength, 0);

        url = new Url('http://localhost/?a=%3F&test=this&hello=world');
        queryLength = url.queryLength();
        assert.strictEqual(queryLength, 3);
    });
});

describe('Url.query.toString()', function () {
    it('should maintain name for null values, and drop them for undefined values', function () {
        const originalStr = 'http://localhost/path?alice=123&bob=&carol'
        const u = new Url(originalStr);
        assert.strictEqual(u.query['alice'], '123');
        assert.strictEqual(u.query['bob'], '');
        assert.strictEqual(u.query['carol'], null);
        assert.strictEqual(u.query['dave'], undefined);
        assert.strictEqual(u.toString(), originalStr);

        u.query['eve'] = null;
        assert.strictEqual(u.toString(), originalStr + '&eve');
        u.query['eve'] = undefined;
        assert.strictEqual(u.toString(), originalStr);

        u.query['frank'] = 'foo';
        assert.strictEqual(u.toString(), originalStr + '&frank=foo');
        delete u.query.frank;
        assert.strictEqual(u.toString(), originalStr);
    });

    it('should maintain name for null values in arrays, and skip undefined values', function () {
        const originalStr = 'http://localhost/?a&a&a';
        const u = new Url(originalStr);
        assert.strictEqual(u.query.toString(), 'a&a&a');
        assert.strictEqual(u.query.a instanceof Array, true);
        assert.strictEqual(u.query.a[0], null);
        assert.strictEqual(u.query.a[1], null);
        assert.strictEqual(u.query.a[2], null);
        assert.strictEqual(u.queryLength(), 1);
        assert.strictEqual(u.toString(), originalStr);

        u.query.a[1] = undefined;
        assert.strictEqual(u.toString(), 'http://localhost/?a&a');

        u.query.a[1] = 'foo';
        assert.strictEqual(u.toString(), 'http://localhost/?a&a=foo&a');

        u.query.a[1] = undefined;
        assert.strictEqual(u.toString(), 'http://localhost/?a&a');

        u.query.a[1] = null;
        assert.strictEqual(u.toString(), originalStr);
    });
});

describe('Url props interface', function () {
    it('should parse all URL parts correctly', function () {
        const str = 'wss://user:pass@example.com:9999/some/path.html?foo=bar#anchor';
        const u = new Url(str);
        assert.strictEqual(u.protocol, 'wss');
        assert.strictEqual(u.user, 'user');
        assert.strictEqual(u.pass, 'pass');
        assert.strictEqual(u.host, 'example.com');
        assert.strictEqual(u.port, '9999');
        assert.strictEqual(u.path, '/some/path.html');
        assert.strictEqual(u.query.toString(), 'foo=bar');
        assert.strictEqual(u.query.foo, 'bar');
        assert.strictEqual(u.hash, 'anchor');
        assert.strictEqual(str, u.toString());
    });
});

describe('Path url encoding', function () {
    it('should correctly encode whitespace as %20', function () {
        const u = new Url('http://localhost/path with space');
        assert.strictEqual(u.toString(),'http://localhost/path%20with%20space');
    });
    // TODO: Fix https://github.com/Mikhus/domurl/issues/49
    xit('should correctly encode Plus Sign (+) to %2b in path.', function () {
        const u = new Url('http://localhost/path+with+plus');
        assert.strictEqual(u.toString(), 'http://localhost/path%2bwith%2bplus');
    });
    xit('should preserve Plus Sign (+) in path.', function () {
        const u = new Url('http://localhost/path+with+plus');
        assert.strictEqual(u.toString(), 'http://localhost/path%2bwith%2bplus');
    });
});
