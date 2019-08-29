const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')

const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Link = require('./resolvers/Link')
const Subscription = require('./resolvers/Subscription')
const Vote = require('./resolvers/Vote')


// Query resolution thus merely becomes a process of orchestrating the invocation of resolver functions!
const resolvers = {
    Query,
    Mutation,
    User,
    Subscription,
    Link,
    Vote
}

// 3
const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: request => {
        return {
            ...request,
            prisma,
        }
    }
})
// The context object that’s passed into all your GraphQL resolvers is being initialized right here.
// Bc we are adding prisma instance right here, we're able to do context.prisma to get all auto-generated methods as per our schema

// Prisma binding instance then translates the GraphQL operations from the Prisma API to JS functions

server.start(() => console.log('Server is up and running on http://localhost:4000'))


