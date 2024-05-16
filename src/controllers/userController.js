const userService = require('../services/userService');

const userController = {
    getUsers: (request, reply) => {
        const users = userService.getUsers();
        reply.send(users);
    },
    getUser: (request, reply) => {
        const { id } = request.params;
        const user = userService.getUserById(+id);
        if (user) {
            reply.send(user);
        } else {
            reply.code(404).send({ error: 'User not found' });
        }
    },
    createUser: (request, reply) => {
        const {firstname, lastname, email } = request.body;
        const newUser = userService.createUser(firstname,lastname, email);
        reply.code(201).send(newUser);
    },
    updateUser: (request, reply) => {
        const { id } = request.params;
        const { firstname, lastname, email } = request.body;
        const updatedUser = userService.updateUser(+id, firstname, lastname, email);
        if (updatedUser) {
            reply.send(updatedUser);
        } else {
            reply.code(404).send({ error: 'User not found' });
        }
    },
    deleteUser: (request, reply) => {
        const { id } = request.params;
        const deletedUser = userService.deleteUser(+id);
        if (deletedUser) {
            reply.send(deletedUser);
        } else {
            reply.code(404).send({ error: 'User not found' });
        }
    }
};

module.exports = userController;
