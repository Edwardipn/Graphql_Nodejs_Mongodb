import { makeExecutableSchema } from '@graphql-tools/schema';
import {resolvers} from "./resolversMgoDB";

const typeDefs = ` 
    type Query {
        hello: String
        saludo(nombre: String!): String
        tasks: [Task!]!
        greet(nombre: String!): String
    }
    type Task {
        id: ID!
        title: String!
        description: String
        number: Int
    }
    type Mutation {
        createTask(input:TaskInput): Task
    }
    input TaskInput {
        title: String!
        description: String
        number: Int
    }
`;
export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});