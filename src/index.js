import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import schema from './schema';

// Config
const APP_PORT = 3000;

// Start
const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
}));

app.listen(APP_PORT, () => {
    console.log(`App listening on http://localhost:${APP_PORT}`);
});
