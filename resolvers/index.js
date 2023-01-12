const books = [
  {
    id: 1,
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    id: 2,
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const resolvers = {
    Query: {
      books: (parent, args, contextValue, info) => {
        const { id } = args
        if (id) {
          return books.filter(book => book.id === id);
        }
        return books
      },
    },
};

module.exports = resolvers;