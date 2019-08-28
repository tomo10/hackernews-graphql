const feed = (parent, args, context, info) => {
    return context.prisma.link()
}

module.exports = {
    feed,
}