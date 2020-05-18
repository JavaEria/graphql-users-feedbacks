import { gql } from 'apollo-server'

const typeDefs = gql`
    type Feedback {
        username: String,
        message: String,
        rating: Float
    }

    type Query {
        feedbacks: [Feedback]
    }

    type Mutation {
        createFeedback(username: String, rating: Float, message:String): String
    }
`

export default typeDefs