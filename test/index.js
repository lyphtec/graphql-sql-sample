import http from 'http';
import assert from 'assert';

import '../src/index';

describe('Express server', () => {
    it('/graphql endpoint should be up', done => {
        http.get('http://localhost:3000/graphql', res => {
            assert.equal(200, res.statusCode);
            done();
        });
    });
});