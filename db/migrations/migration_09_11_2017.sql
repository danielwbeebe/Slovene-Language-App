-- \c slovene_dev;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS level;

CREATE TABLE users(
    id BIGSERIAL PRIMARY KEY,
    username VARCHAR UNIQUE NOT NULL,
    email VARCHAR UNIQUE NOT NULL,
    password_digest TEXT NOT NULL,
    level INT
);

CREATE TABLE level(
    id BIGSERIAL PRIMARY KEY,
    level INT,
    user_id INT REFERENCES users(id) NOT NULL
);
