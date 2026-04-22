import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schemaMgoDB';

const app = express();

app.get('/', (request, response) => {
    response.send('Hello, World from MongoDB!');
});
// const schema = {};

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,
    context: { message: "Envio este texto desde la propiedad context del middleware de MongoDB" }
}));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
import { connectDB } from './databaseMgoDB';
connectDB();