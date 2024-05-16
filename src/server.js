const fastify = require('fastify');
const dotenv = require('dotenv');
const errorHandler = require('./utils/errorHandler');
const userRoutes = require('./routes/userRoutes');


dotenv.config();

const app = fastify();

app.register(require('@fastify/swagger'))

app.register(require('@fastify/swagger-ui'))


// routes
app.get('/', () => {
  let WelcomeMessage = 'Welcome to our Fastify server!';
  return WelcomeMessage;
})

app.register(userRoutes);

// error handle
app.setErrorHandler(errorHandler);

const startFastifyServer = async () => {
  await app.listen({port: process.env.PORT}, (err, address)=> {
    if (err) {
      app.log.error(err);
      process.exit(1);
    }
  });
  console.log(`Server listening on ${process.env.PORT}`);
};



module.exports = {
  startFastifyServer
}


