* Project clone : git clone https://github.com/your-repo/your-project.git

* Project install : npm install

* Project Start : npm run dev
* Token Genarate : npm run token (Add Bearer token on header Authrozition)

* Test Query Example:

 1. query {
  node(nodeId: "62971a9570a0c12bb389cd13") {
    _id
    name
    description
  }
}


 2. query {
  node(nodeId: "62971a9570a0c12bb389cd13") {
    _id
    name
    parents {
      _id
      name
      parents {
        _id
        name
        responses {
          name
        }
      }
    }
  }
}

 3. query {
  node(nodeId: "62971a9570a0c12bb389cd13") {
    _id
    name
    parents {
      _id
      name
    }
    actions {
      _id
      description
    }
    responses {
      _id
      name
    }
    trigger {
      _id
    }
  }
}


NB: you can test by your own query

              # Thank you 



 
