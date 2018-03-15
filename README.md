# Sample project exploring [GraphQL](http://graphql.org/) + SQL backend

Concepts covered:

* Using ES6+ with Node + webpack + babel (via [babel-loader](https://webpack.js.org/loaders/babel-loader/)) - with concepts from [here](https://github.com/babel/example-node-server)
* GraphQL + backend DB sample as per [https://github.com/leebenson/graphql-with-sequelize](https://github.com/leebenson/graphql-with-sequelize) / this [Youtube tut](https://www.youtube.com/watch?v=DNPVqK_woRQ)
* [Sequelize](http://docs.sequelizejs.com/) - the SQL ORM for Node
* Using webpack for backend - sample [config](https://github.com/js-accounts/graphql/blob/master/packages/graphql-api/webpack.config.js)
* Apollo framework: [graphql-tools](http://dev.apollodata.com/tools/graphql-tools/index.html) & [apollo-server-express](http://dev.apollodata.com/tools/apollo-server/index.html)

## Development mode:

`npm start`

This uses [babel-node](https://babeljs.io/docs/usage/cli/#babel-node) and runs the app directly from `src/index.js`

## Production:

2 options available:

1. Build & serve

    Do a build first using:

    `npm run build`

    This uses babel-cli to transpile ES6 source files from `src` into `dist` folder

    Then run with:

    `npm run serve` or `node dist/index.js`

1. Use webpack to transpile & bundle app into single `dist/app.js` file:

    `npm run webpack`

    App can then be run with `node dist/app.js`
