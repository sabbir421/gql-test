const { GraphQLScalarType, Kind } = require('graphql');
const fs = require('fs');
const path = require('path');

// Sample data
const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../nodes.json')));

const resolvers = {
  Long: new GraphQLScalarType({
    name: 'Long',
    description: 'Long integer type to handle timestamps or large integer values',
    serialize(value) {
      // Serialize the value to be returned by the GraphQL API
      return parseInt(value);
    },
    parseValue(value) {
      // Parse incoming values from queries
      return parseInt(value);
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        // Parse literal values (hardcoded in queries)
        return parseInt(ast.value);
      }
      return null;
    }
  }),
  
  Query: {
    node: (parent, { nodeId }) => {
      return data.find(node => node._id === nodeId) || null;
    },
  },
};

module.exports = resolvers;
