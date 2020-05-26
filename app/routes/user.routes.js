module.exports = (app) => {
    const users = require('../controllers/user.controllers.js');

    // Create a new users
    app.post('/users', users.create);

    // Retrieve all users
    app.get('/users', users.findAll);

    // Retrieve a single users with usersid
    app.get('/users/:userid', users.findOne);

    // Update a users with usersid
    app.put('/users/:userid', users.update);

    // Delete a users with usersid
    app.delete('/users/:userid', users.delete);
}