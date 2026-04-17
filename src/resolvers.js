/* export const resolvers = {
    Query: {
        hello: () => 'Hello, World from resolvers!',
        saludo: (parent, args) => `Hola, ${args.nombre}!`
    }
}; *///This is a placeholder for the resolvers that will be defined to handle the queries and mutations specified in the GraphQL schema. Resolvers are functions that are responsible for fetching the data for a particular field in the schema. They can be defined to interact with databases, APIs, or any other data sources to retrieve the necessary information for the GraphQL queries and mutations.
/**Ejemplo 2 */
/* export const resolvers = {
    Query: {
        hello: () => 'Hello, World from resolvers!',
        saludo: (parent, { nombre }) => `Hola, ${nombre}!`
    }
}; */
import { tasks } from './sample'; // This import brings in the sample data that we will use in our resolvers. / Este import trae los datos de muestra que usaremos en nuestros resolvers.
export const resolvers = {
    Query: {
        hello: () => 'Hello, World from resolvers!',
        saludo: (parent, { nombre }) => `Hola, ${nombre}!`
    }
};