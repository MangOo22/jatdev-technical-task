// userRoutes.js
const userController = require('../controllers/userController');

const userRoutes = (fastify, options, done) => {
    fastify.get('/users', userController.getUsers);
    fastify.get('/users/:id', { schema: getUserSchema }, userController.getUser);
    fastify.post('/users', { schema: createUserSchema }, userController.createUser);
    fastify.put('/users/:id', { schema: updateUserSchema }, userController.updateUser);
    fastify.delete('/users/:id', { schema: deleteUserSchema }, userController.deleteUser);
    done();
};

// Schema definitions
const getUserSchema = {
    params: {
        type: 'object',
        properties: {
            id: { type: 'string' }
        },
        required: ['id']
    }
};

const createUserSchema = {
    body: {
        type: 'object',
        properties: {
            firstname: { type: 'string' },
            lastname: { type: 'string' },
            email: { type: 'string', format: 'email' }
        },
        required: ['firstname', 'lastname', 'email']
    }
};

const updateUserSchema = {
    params: {
        type: 'object',
        properties: {
            id: { type: 'string' }
        },
        required: ['id']
    },
    body: {
        type: 'object',
        properties: {
            firstname: { type: 'string' },
            lastname: { type: 'string' },
            email: { type: 'string', format: 'email' }
        }
    }
};

const deleteUserSchema = {
    params: {
        type: 'object',
        properties: {
            id: { type: 'string' }
        },
        required: ['id']
    }
};

module.exports = userRoutes;
