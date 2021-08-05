CREATE USER mulligan_app WITH PASSWORD 'password';
CREATE DATABASE IF NOT EXISTS mulligan_development WITH OWNER mulligan_app;

CREATE TABLE IF NOT EXISTS Users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(30) NOT NULL,
    email VARCHAR(256) NOT NULL,
    hashedPassword BYTEA NOT NULL,
    avatarUrl VARCHAR(1000),
    createdAt TIMESTAMP NOT NULL DEFAULT NOW(),
    updatedAt TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO users (username, email, hashedPassword, createdAt, updatedAt)
VALUES
    ('Demo Manager', 'demo@user.io', '$2a$10$NJF7iNx8ZJBxZ8gx0udnh.KTRjGqMzoyblb9yDzryhwSb.JJCDi0m', DEFAULT, DEFAULT),
    ('Software Developer', 'Alberta_Reynolds41@hotmail.com', '$2a$10$wgSNDWMw08EyPp0UKsduuO1v0Jsr6OB8xEwy/KJkbxEz/Y4xvplTG', DEFAULT, DEFAULT),
    ('WebDev Specialist', 'Monserrat.Nolan@hotmail.com', '$2a$10$4vdiZXh7K/3ujPy6KY4lUutFRDyd2b8w.dCwctRP/oEtUW996uPB.', DEFAULT, DEFAULT);
