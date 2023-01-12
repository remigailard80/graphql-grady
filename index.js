var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var resolvers = require("./resolvers")
var typeDefs = require("./typeDefs")

const { ApolloServer } = require("apollo-server");


const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});

  
app.get("/graphql", function (req, res) {
    res.send("Hello graphql----");
  });

app.listen(3000, function () {
    console.log("App started");
});