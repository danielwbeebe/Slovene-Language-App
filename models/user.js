const db = require('../db/config');
const User = {};

User.findByUserName = username =>{
    return db.one(`
        SELECT * FROM users
        WHERE username = $1
    `, [username]);
}

User.create = user =>{
    return db.one(`
        INSERT INTO users
        (username, email, password_digest, level)
        VALUES
        ($1,$2,$3,1)
        RETURNING *
    `, [user.username, user.email, user.password_digest, user.level]);
};

User.update = user =>{
    return db.one(`
        UPDATE users SET
        level = level+1
        WHERE id = $2
        RETURNING *
    `, [user.level, user.user_id]);
};

module.exports = User;
