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
    trigger: [Trigger]
    preActions: JSON
    responses: [Response]
    postActions: JSON
    actions: [Action]  # Updated actions field
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
    parents: [NodeObject]
    root: Boolean
    position: Position
  }

  type Action {
    _id: ID!  # Updated to use _id
    name: String
    description: String
    nodeId: ID  # Assuming each action is associated with a nodeId
    createdAt: Long
  }

  type Response {
    _id: ID!
    name: String
    description: String
    platforms: JSON
    tags: [String]
    createdAt: Long
  }

  type Trigger {
    _id: ID!
    # Add other relevant fields for Trigger here
  }

  type Query {
    node(nodeId: ID): NodeObject
  }
`;

module.exports = typeDefs;
