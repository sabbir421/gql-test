const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const typeDefs = require("./typedefs/schema");
const resolvers = require("./resolver/resolver");
const authenticate = require("./utils/authenticate");

const startServer = async () => {
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
        try {
          const user = await authenticate(req);
          return { user }; 
        } catch (error) {
          throw new Error(error.message || "Unauthorized");
        }
      },
    })
  );

  app.listen(8000, () => console.log("Server started on port 8000"));
};

startServer();
