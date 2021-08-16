import { config } from 'dotenv';
config()

import { ApolloServer } from 'apollo-server';
import { applyMiddleware } from 'graphql-middleware';
import { schema } from './schema';
import { isDev } from './utils/constants';
import { createContext } from './utils/helpers';

export const server = new ApolloServer({
  schema: applyMiddleware(schema),
  context: createContext,
  introspection: true,
  debug: isDev(),
  formatError: (err) => {
    console.error(err.extensions?.exception.stacktrace.join('\n'));
    return err;
  },
  cors: true,
  // subscriptions: {
  //   onConnect: (_connectionParams, _websocket, connContext): SocketContext => {
  //     return {
  //       req: connContext.request,
  //       prisma,
  //       pubsub,
  //     }
  //   },
  // },
});
