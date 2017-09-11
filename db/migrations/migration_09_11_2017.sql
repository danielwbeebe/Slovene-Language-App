DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS questions;

CREATE TABLE users(
    id BIGSERIAL PRIMARY KEY,
    username VARCHAR UNIQUE NOT NULL,
    email VARCHAR UNIQUE NOT NULL,
    password_digest TEXT NOT NULL,
    level INT
);

CREATE TABLE questions(
    id BIGSERIAL PRIMARY KEY,
    level INT NOT NULL,
    question TEXT,
    right_answer TEXT,
    wrong_answer_1 TEXT,
    wrong_answer_2 TEXT,
    correct BOOLEAN NOT NULL,
    user_id INT REFERENCES users(id) NOT NULL
);
