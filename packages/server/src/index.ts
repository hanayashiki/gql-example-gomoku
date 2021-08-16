import { server } from './server'

const PORT = process.env.PORT || 4002

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
})