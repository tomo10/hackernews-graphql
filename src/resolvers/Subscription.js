const newLinkSubscribe = (parent, args, context, info) => {
    return context.prisma.$subscribe.link({ mutation_in: ['CREATED'] }).node()
}

const newVoteSubscribe = (parent, args, context, info) => {
    return context.prisma.$subscribe.vote({ mutation_in: ['CREATED'] }).node()
}

// newLink / newVote just plain JS objects
const newLink = {
    subscribe: newLinkSubscribe,
    resolve: payload => {
        return payload
    }
}

const newVote = {
    subscribe: newVoteSubscribe,
    resolve: payload => {
        return payload
    }
}

module.exports = {
    newLink,
    newVote
}