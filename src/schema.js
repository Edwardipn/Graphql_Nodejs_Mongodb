import { makeExecutableSchema } from '@graphql-tools/schema'; // This import is used to create an executable GraphQL schema from the type definitions and resolvers. / Este import se usa para crear un esquema GraphQL ejecutable a partir de las definiciones de tipo y los resolvers.
import {resolvers} from "./resolvers"; // This import loads the resolver functions for the schema. / Este import carga las funciones resolvers para el esquema.

const typeDefs = ` 
    type Query {
        hello: String
        saludo(nombre: String!): String
    }
`; // GraphQL schema definition in SDL (Schema Definition Language). / Definición del esquema GraphQL en SDL (Schema Definition Language).
/**A continuación, se crea el esquema ejecutable utilizando las definiciones de tipo y los resolvers. */
export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});
/**exporte el objeto schema creado, ahora los importaremos en el servidor */