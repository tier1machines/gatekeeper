const express = require("express");
const graphqlHTTP = require("express-graphql");
const bodyParser = require("body-parser");

const schema = require("./schema.js");
const resolver = require("./resolver.js");

const PORT = 8081;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: resolver,
    graphiql: true
  })
);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

module.exports = app;
