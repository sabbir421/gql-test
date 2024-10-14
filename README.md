* Project clone :git clone https://github.com/your-repo/your-project.git

* Project install :npm install

* Project Start : npm run dev
* Token Genarate : npm run token (Add Bearer token on header Authrozition)
* Token :"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQiLCJpYXQiOjE3Mjg5MjQyNjUsImV4cCI6MTczNjcwMDI2NX0.aXQfRSJLFkkdH1PkKI_5CFzNQ2YaMSDua-ZXdaPtFvQ"
*  .env : JWT_SECRET=your_jwt_secret
          PORT=8000

GraphQL Playground : http://localhost:8000/graphql

* Test Query Example:

 query { 
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



 


NB: you can test by your own query

Thank you for your time

 
