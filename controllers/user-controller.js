// const users = [];
const User = require('../models/user');

exports.getAddUser = (req, resp, next) => {
    resp.render('add-user', {pageTitle: 'Add User'});
};

exports.postAddUser = (req, resp, next) => {
    // users.push({userName: req.body.userName});
    // console.log(users);
    const user = new User(req.body.firstName, req.body.lastName);
    user.save();

    // const users = user.fetchAll();
    // console.log(users);

    // resp.render('admin-home', {
    //     pageTitle: 'Admin Dashboard',
    //     users: users
    // });

    User.fetchAll(users => {
        resp.render('admin-home', {
            pageTitle: 'Admin Dashboard',
            users: users
        });  
    })
};