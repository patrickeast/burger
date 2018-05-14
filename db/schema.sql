-- Drop Database if it already exists.
DROP DATABASE IF EXISTS burgers_db;
-- Create the database
CREATE DATABASE burgers_db;
-- Start using the database
USE burgers_db;

-- Create burgers table
CREATE TABLE burgers
-- Insert values into burgers table
(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id)
);
