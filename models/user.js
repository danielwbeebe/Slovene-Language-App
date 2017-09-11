const db = require('../db/config');
const User = {};

User.findByUserName = username =>{
    return db.one(`
        SELECT * FROM users
        WHERE username = $1
    `,[username]);
}

User.create = user =>{
    return db.one(`
        INSERT INTO users
        (name, email, password_digest, level)
        VALUES
        ($1,$2,$3,$4)
        RETURNING *
    `, [user.name, user.email, user.password_digest, user.level]);
};

module.exports = User;
