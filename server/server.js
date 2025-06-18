const express = require('express');
const { graphqlHTTP } = require('express-graphql'); // NEED TO UNDERSTAD
const { buildSchema } = require('graphql'); // WHAT ELSE THIS REPO WILL HAVE

const app = express();

const schema = buildSchema(`
  type Query {
    hello: String
    htmlContent: String
  }
`);

const root = {
  hello: () => 'Hello from GraphQL server!',
  htmlContent: () => '<p>This is <strong>HTML</strong> from server</p>',
};

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}));

app.listen(8080, () => {
  console.log('GraphQL server running on http://localhost:8080/graphql');
});
