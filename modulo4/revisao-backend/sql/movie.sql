CREATE TABLE movie (
id INT PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(255) NOT NULL,
year YEAR NOT NULL
);

INSERT INTO movie (title, year)
VALUES 
("Deadpool", 2016),
("X-men O Filme", 2000);

SELECT * FROM movie;