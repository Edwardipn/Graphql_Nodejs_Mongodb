/* 
const express = require('express');
const app = express();
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
 */
/** 
import express from 'express';
const app = express();
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});*///Se usa la versión 5.2.1 de express, que soporta módulos ES, por lo que podemos usar import en lugar de require.
/**Se agregara el import de graphql, su middleware y se activara el interface GraphiQL para testing*/
/**import express from 'express';
import { graphqlHTTP } from 'express-graphql';
const app = express();

app.get('/', (request, response) => {
    response.send('Hello, World from GraphQL!');
});

app.use('/graphql', graphqlHTTP({
    graphiql: true
}));//Esto configura el endpoint GraphQL en /graphql y habilita la interfaz GraphiQL para pruebas.

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});*///Esta es la configuración básica de un servidor Express con GraphQL. Los siguientes pasos serían definir un esquema GraphQL y resolvers para manejar consultas y mutaciones.

/**se crea el esquema y se configura en el middleware */
/*
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
const app = express();

app.get('/', (request, response) => {
    response.send('Hello, World from GraphQL!');
});
const schema = {};

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}));//Esto configura el endpoint GraphQL en /graphql y habilita la interfaz GraphiQL para pruebas. 
// El esquema actualmente está vacío, pero se definirá en los siguientes pasos para especificar los tipos, consultas y mutaciones de la API GraphQL.

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});*/
/**despues de crear el esquema, lo importamos en este servidor pero comentare el código actual para usarlo en una versión limpia*/
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema'; // This import brings in the GraphQL schema that we will use to define the structure of our GraphQL API. / Este import trae el esquema GraphQL que usaremos para definir la estructura de nuestra API GraphQL. 

const app = express();

app.get('/', (request, response) => {
    response.send('Hello, World from GraphQL!');
});
// const schema = {};

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});