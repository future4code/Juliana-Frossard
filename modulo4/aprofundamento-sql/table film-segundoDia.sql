CREATE TABLE Film (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL UNIQUE,
    synpose TEXT NOT NULL,
    release_date DATE NOT NULL,
    assessment INT (10),
    playing_limit_date DATE
);

SELECT * FROM Film;

ALTER TABLE Film ADD playing_limit_date DATE ;
ALTER TABLE Film CHANGE assessment assessment FLOAT;

UPDATE Film SET playing_limit_date = "2020-12-23"
WHERE id="001";
UPDATE Film SET playing_limit_date = "2023-12-23"
WHERE id="002";

DELETE FROM Film WHERE name = "Se Eu Fosse Você";
UPDATE Film SET synpose = "Se eu fosse voce" WHERE id="001";

SELECT * FROM Film WHERE assessment>7.5;
SELECT AVG(assessment) FROM Film;
SELECT COUNT(*) FROM Film WHERE playing_limit_date > CURDATE();
SELECT COUNT(*) FROM Film WHERE release_date > CURDATE();
SELECT MAX(assessment) FROM Film;
SELECT MIN(assessment) FROM Film;
SELECT * FROM Film ORDER BY name ASC;
SELECT * FROM Film ORDER BY name DESC LIMIT 5;
SELECT * FROM Film 
WHERE release_date < CURDATE() ORDER BY release_date DESC LIMIT 3;
SELECT * FROM Film ORDER BY assessment DESC LIMIT 3;
