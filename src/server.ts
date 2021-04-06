import { ApolloServer } from 'apollo-server'
import { loadSchemaSync } from '@graphql-tools/load'
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import { addResolversToSchema } from '@graphql-tools/schema'
import resolvers from './resolvers'

const schemaFiles = loadSchemaSync('./src/**/*.graphql', { loaders: [new GraphQLFileLoader()] })


const schema = addResolversToSchema(schemaFiles, resolvers)


const server = new ApolloServer({
  cors: false,
  introspection: true,
  playground: true,
  debug: true,
  schema,
})

export default server