const { gql } = require('apollo-server');
const { GraphQLJSON } = require('graphql-type-json');

const typeDefs = gql`
  scalar Long
  scalar JSON

  type Position {
    x: Float
    y: Float
  }

  type NodeObject {
    _id: ID!
    name: String!
    description: String
    trigger: ID
    preActions: JSON
    responses: [ID]
    postActions: JSON
    actions: JSON
    compositeId: ID
    global: Boolean
    redirect: JSON
    analytics: JSON
    memberTagging: JSON
    type: String
    tags: JSON
    saveCompositeId: Boolean
    createdAt: Long!
    updatedAt: Long
    parents: [ID]
    root: Boolean
    position: Position
  }

  type Query {
    node(nodeId: ID): NodeObject
  }
`;

module.exports = typeDefs;
