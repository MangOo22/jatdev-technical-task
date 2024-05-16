const userController = require('../controllers/userController');

const userRoutes = (fastify, options, done) => {
    fastify.get('/users', userController.getUsers);
    fastify.get('/users/:id', userController.getUser);
    fastify.post('/users', userController.createUser);
    fastify.put('/users/:id', userController.updateUser);
    fastify.delete('/users/:id', userController.deleteUser);
    done();
};

module.exports = userRoutes;
