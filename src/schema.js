import { makeExecutableSchema } from 'graphql-tools';
import Db from './db';

const typeDefs = `
    # Blog post
    type Post {
        id: Int!
        title: String
        content: String
        person: Person
    }

    # Represents a person
    type Person {
        id: Int!
        firstName: String
        lastName: String
        email: String
        posts: [Post]
    }

    # Root query object
    type Query {
       people(id: Int, email: String): [Person]
       posts: [Post]
    }

    # Mutations
    type Mutation {
        addPerson (
            firstName: String!
            lastName: String!
            email: String!
        ): Person
    }
`;

const resolvers = {
    Query: {
        people: (_, args) => Db.models.person.findAll({ where: args }),
        posts: (_, args) => Db.models.post.findAll({ where: args })
    },
    Mutation: {
        addPerson: (_, { firstName, lastName, email }) => {
            return Db.models.person.create({
                firstName,
                lastName,
                email: email.toLowerCase()
            });
        }
    },
    Post: {
        person: (post) => post.getPerson()
    },
    Person: {
        posts: (person) => person.getPosts()
    }
};

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;
