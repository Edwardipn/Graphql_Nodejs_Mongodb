import { tasks } from './sampleMgoDB';
export const resolvers = {
    Query: {
        hello: () => 'Hello, World from resolvers!',
        saludo: (parent, { nombre }) => `Hola, ${nombre}!`,
        tasks: () => tasks,
        greet: (parent, args, context) => {
            console.log('Context received in resolver: ', context);
            return `Hola, ${args.nombre}!`;
        }
    },
    Mutation: {
        createTask: (_, { input }) => {
            input.id = tasks.length + 1;
            tasks.push(input);
            return input;
        }
    }
};