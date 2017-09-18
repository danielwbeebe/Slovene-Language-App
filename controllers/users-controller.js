const bcrypt = require('bcryptjs');
const User = require('../models/user.js');
const usersController = {};

usersController.create = (req, res) => {
    console.log(req.body)
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(req.body.options.password, salt);
    User.create({
        username: req.body.options.userName,
        email: req.body.options.email,
        password_digest: hash,
        level: req.body.options.level,
    })
    .then(user => {
        req.login(user, (err) => {
            if(err) return next(err);
            res.json({
                message: 'ok',
                user: user,
                auth: true,
            })
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    })
};

usersController.update = (req, res) => {
    console.log(req.body)
    User.update({
        user_id: req.body.user_id,
        // to change level
        level: req.body.level,
    })
    .then(card => {
        console.log(`Updated user level`)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    })
}

module.exports = usersController;
