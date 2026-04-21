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
/**Ejemplo 3 importando un arreglo de objetos sample.js*/
/**[1]crear el archivo sample.js despues ir al archivo schema.js y crear su tipo de dato, sera el punto [1a]*/
/**1. para crear este resolver creare primero su tipo de dato task */
export const resolvers = {
    Query: {
        hello: () => 'Hello, World from resolvers!',
        saludo: (parent, { nombre }) => `Hola, ${nombre}!`,
        tasks: () => tasks
    }
/*     ,
    Mutation: {
        createTask: (_, { input }) => {
            console.log('Input received in resolver:', input); 
            return null; 
        }
    } */
    ,
    Mutation: {
        createTask: (_, { input }) => {
            input.id = tasks.length + 1; // Assign a new ID based on the current length of the tasks array
            tasks.push(input);// Add the new task to the tasks array
            return input;// Return the newly created task
        }
    }
};