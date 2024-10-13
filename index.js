const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const typeDefs = require("./typedefs/schema");
const resolvers = require("./resolver/resolver");
const authenticate = require("./utils/authenticate");

const startSarver = async () => {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  app.use(bodyParser.json());
  app.use(cors());
  await server.start();
  app.use(
    "/graphql",
    expressMiddleware(server, {
      context: async ({ req }) => {
        const user = authenticate(req);
        return {user};
      },
    })
  );

  app.listen(8000, () => console.log("server start on port 8000"));
};

startSarver();
