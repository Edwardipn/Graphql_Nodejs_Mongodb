import { tasks } from './sampleMgoDB';
import User from './models/UserMgoDB';
export const resolvers = {
    Query: {
        hello: () => 'Hello, World from resolvers!',
        saludo: (parent, { nombre }) => `Hola, ${nombre}!`,
        tasks: () => tasks,
        users: () => User.find({}),
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
        },
        createUser: async (_, { input }) => {
            const user = new User(input);
            console.log('User to be saved: ', user);
            await user.save();
            return user;
        },
        deleteUser: async (_, { id }) => {
            const user = await User.findByIdAndDelete(id);
            return user;
        },
        updateUser: async (_, { id, input }) => {
            const user = await User.findByIdAndUpdate(id, input, { returnDocument: 'after' });
            return user;
        }
    }
};