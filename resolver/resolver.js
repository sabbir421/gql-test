const { GraphQLScalarType, Kind } = require("graphql");
const fs = require("fs");
const path = require("path");

const nodes = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../data/nodes.json"))
);
const actions = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../data/action.json"))
);
const responses = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../data/response.json"))
);
const triggers = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../data/trigger.json"))
);

const resolvers = {
  Long: new GraphQLScalarType({
    name: "Long",
    description:
      "Long integer type to handle timestamps or large integer values",
    serialize(value) {
      return parseInt(value);
    },
    parseValue(value) {
      return parseInt(value);
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value);
      }
      return null;
    },
  }),

  Query: {
    node: (parent, { nodeId }) => {
      return nodes.find((node) => node._id === nodeId) || null;
    },
  },

  NodeObject: {
    parents: (node) => {
      if (!node.parents?.length) {
        return [];
      }
      return node?.parents?.map((compositId) =>
        nodes.find((node) => node.compositeId === compositId)
      );
    },
    actions: (node) => {
      if (node.actions && Array.isArray(node.actions)) {
        return actions.filter((action) => node.actions.includes(action._id));
      }
      return null;
    },
    responses: (node) => {
      return responses.filter((response) =>
        node.responses?.includes(response._id)
      );
    },
    trigger: (node) => {
      if (node.trigger) {
        return triggers.find((trigger) => node.trigger === trigger._id);
      }
      return null;
    },
  },
};

module.exports = resolvers;
