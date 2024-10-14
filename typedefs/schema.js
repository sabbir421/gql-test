const { gql } = require("apollo-server");
const { GraphQLJSON } = require("graphql-type-json");

const typeDefs = gql`
  scalar Long
  scalar JSON

  type Action {
    _id: ID!
    name: String
    description: String
    createdAt: Long
    updatedAt: Long
    functionString: String
    resourceTemplateId: ID
    resourceTemplate: ResourceTemplate
  }

  type Trigger {
    _id: ID!
    name: String!
    description: String
    createdAt: Long
    updatedAt: Long
    functionString: String
    resourceTemplateId: ID
    resourceTemplate: ResourceTemplate
  }

  type Response {
    _id: ID!
    name: String!
    description: String
    createdAt: Long
    updatedAt: Long
    platforms: [ResponsePlatform]
  }

  type ResponsePlatform {
    integrationId: ID
    build: Int
    localeGroups: [ResponseLocaleGroup]
  }

  type ResponseLocaleGroup {
    localeGroupId: ID
    variations: [ResponseVariation]
  }

  type ResponseVariation {
    name: String!
    responses: JSON
  }

  type ResourceTemplate {
    _id: ID!
    name: String!
    description: String
    schema: JSON
    integrationId: String
    functionString: String
    key: String
    createdAt: Long
    updatedAt: Long
  }

type NodeObject {
  _id: ID!
  name: String!
  description: String
  createdAt: Long!
  updatedAt: Long
  parents: [NodeObject]
  parentIds: [ID]
  root: Boolean
  triggerId: ID
  trigger: [Trigger]
  responseIds: [ID]
  actions: [Action]
  responses: [Response]
  priority: Float
  compositeId: ID
  global: Boolean
  colour: String
}

  type Query {
    node(nodeId: ID!): NodeObject
  }
`;

module.exports = typeDefs;
