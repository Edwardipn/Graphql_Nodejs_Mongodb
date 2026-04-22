import { makeExecutableSchema } from '@graphql-tools/schema';
import {resolvers} from "./resolversMgoDB";

const typeDefs = ` 
    type Query {
        hello: String
        saludo(nombre: String!): String
        tasks: [Task!]!
        greet(nombre: String!): String
        users: [User!]!
    }
    type Task {
        id: ID!
        title: String!
        description: String
        number: Int
    }
    type Mutation {
        createTask(input:TaskInput): Task
        createUser(input:UserInput): User
        deleteUser(id: ID!): User
        updateUser(id: ID!, input: UserInput): User
    }
    input TaskInput {
        title: String!
        description: String
        number: Int
    }
    type User {
        id: ID!
        name: String!
        lastname: String
        age: Int
    }
    input UserInput {
        name: String!
        lastname: String
        age: Int
    }
`;
export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});