CREATE TABLE movie_characters (
movie_id INT,
character_id INT,
FOREIGN KEY (movie_id) REFERENCES movie(id),
FOREIGN KEY (character_id) REFERENCES `character`(id)
);

SELECT * FROM  movie_characters;

INSERT INTO movie_characters
VALUES 
(1,3),
(2,1),
(2,2);

SELECT title, name FROM movie_characters
JOIN movie ON movie_id = movie.id
JOIN `character` ON character_id = `character`.id;

