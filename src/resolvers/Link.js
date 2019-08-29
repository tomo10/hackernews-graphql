function postedBy(parent, args, context) {
    return context.prisma.link({ id: parent.id }).postedBy()
  }

const votes = (parent, args, context) => {
    return context.primsa.link({ id: parent.id}).votes()
}
  
  module.exports = {
    postedBy,
    votes
  }