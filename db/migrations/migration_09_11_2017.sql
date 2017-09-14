\c slovene_dev;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS questions;

CREATE TABLE IF NOT EXISTS users(
    id BIGSERIAL PRIMARY KEY,
    username VARCHAR UNIQUE NOT NULL,
    email VARCHAR UNIQUE NOT NULL,
    password_digest TEXT NOT NULL,
    level INT
);
