* Prerequisites
Before you begin, ensure you have the following installed on your machine:

Node.js (v16+)
npm (v6+)
* Project clone :git clone https://github.com/your-repo/your-project.git

* Project install :npm install

* Project Start : npm run dev
* Token Genarate : npm run token (Add Bearer token on header Authrozition)
* Token :"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQiLCJpYXQiOjE3Mjg5MjQyNjUsImV4cCI6MTczNjcwMDI2NX0.aXQfRSJLFkkdH1PkKI_5CFzNQ2YaMSDua-ZXdaPtFvQ"
*  .env : JWT_SECRET=your_jwt_secret
          PORT=8000 
* Data Sources
All data is currently being served from static JSON files:

nodes.json: Contains NodeObject data.
action.json: Contains Action data.
response.json: Contains Response data.
trigger.json: Contains Trigger data.

GraphQL Playground : http://localhost:8000/graphql

* Authentication
The API is protected by JWT authentication. To make authenticated requests, include a valid token in the Authorization header: {
  "Authorization": "Bearer your_token"
}


* Test Query Example:
  

1. query { 
  node(nodeId: "62971b3470a0c1803c89cd15") 
    {
     _id
    name
    description
    createdAt
    updatedAt
    parents{
      name
    }
    parentIds
    root
    triggerId
    trigger {
      name
    }
    responseIds
    actions {
      name
    }
    responses {
      name
    }
    priority
    compositeId
    global
    colour
      } 
  }

2. query GetNode {
  node(nodeId: "62971b3470a0c1803c89cd15") {
    _id
    name
    description
    createdAt
    parents {
      _id
      name
    }
    actions {
      _id
      name
      functionString
    }
    responses {
      _id
      name
      platforms {
        integrationId
        localeGroups {
          localeGroupId
          variations {
            name
            responses
          }
        }
      }
    }
    trigger {
      _id
      name
      functionString
    }
  }
}


 


NB: you can test by your own query

Thank you for your time

 
