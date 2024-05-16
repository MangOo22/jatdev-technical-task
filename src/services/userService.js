const User = require('../models/userModel');

let users = [
    {id: 1, firstname: 'ahmed', lastname: 'nageh', email: 'ahmednagehn2@gmail.com'},
];

const userService = {
    getUsers: () => {
        return users;
    },
    getUserById: (id) => {
        return users.find(user => user.id === id);
    },
    createUser: (firstname, lastname, email) => {
        const id = users.length + 1;
        const newUser = new User(id, firstname, lastname, email);
        users.push(newUser);
        return newUser;
    },
    updateUser: (id, firstname, lastname, email) => {
        const userIndex = users.findIndex(user => user.id === id);
        if (userIndex !== -1) {
            users[userIndex].firstname = firstname;
            users[userIndex].lastname = lastname;
            users[userIndex].email = email;
            return users[userIndex];
        }
        return null;
    },
    deleteUser: (id) => {
        const userIndex = users.findIndex(user => user.id === id);
        if (userIndex !== -1) {
            const deletedUser = users.splice(userIndex, 1);
            return deletedUser[0];
        }
        return null;
    }
};

module.exports = userService;
