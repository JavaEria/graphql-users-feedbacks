// import { ApolloServer } from "apollo-server"
// import { ApolloServer } from "apollo-server-express"
import { ApolloServer } from "apollo-server-express"
import * as http from "http"

import typeDefs from "./schema"
import resolvers from "./resolver"
const express = require('express')

const apollo = new ApolloServer({typeDefs, resolvers})

const app = express()

apollo.applyMiddleware({
  app,
  path: "/",
  bodyParserConfig: { limit: "50mb" },
  cors: { origin: "*" }
})

const server = http.createServer(app)

server.listen({ port: 8081 }, () => {
    console.log("Graphql ready!")
});