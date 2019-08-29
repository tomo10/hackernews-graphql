function links(parent, args, context) {
    return context.prisma.user({ id: parent.id }).links()
  }
  
  module.exports = {
    links,
  }

  // This Prisma client instance effectively lets you access your database through the Prisma API. 
  // It exposes a number of methods that let you perform CRUD operations for your models.