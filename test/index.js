import http from 'http';
import assert from 'assert';

import '../src/index';

describe('Express server', () => {
    it('/graphiql endpoint should be up', done => {
        http.get('http://localhost:3000/graphiql', res => {
            assert.equal(200, res.statusCode);
            done();
        });
    });
});