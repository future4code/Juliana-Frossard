CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
SET SQL_SAFE_UPDATES = 0;
SHOW TABLES;
SELECT * FROM Actor;
SELECT name "Nascimento do ator" ,birth_date "nasceu em "  from Actor;

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

UPDATE Actor SET name = "Claudia Raia" , birth_date = "1966-12-23"
WHERE id="003";

SELECT UPPER(name) from Actor
WHERE name = "Juliana Paes";

UPDATE Actor SET name = "JULIANA PAES" 
WHERE name = "Juliana Paes";

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

#update errado a pedido do exercicio
UPDATE Actor SET 
nome = "Nicette Bruno" 
WHERE id="015";

DELETE FROM Actor WHERE name = "Fernanda Montenegro";

DELETE FROM Actor WHERE gender = "male" AND salary>1000000;

SELECT COUNT(*) FROM Actor;
SELECT COUNT(*) FROM Actor WHERE gender = "female";
SELECT AVG(salary) FROM Actor;

SELECT MAX(salary) FROM Actor;
SELECT MIN(salary) FROM Actor
WHERE gender="female";
SELECT COUNT(*) FROM Actor WHERE gender = "female";
SELECT SUM(salary) FROM Actor;
SELECT * FROM Actor LIMIT 3;
SELECT * FROM Actor ORDER BY name ASC;
SELECT * FROM Actor ORDER BY name DESC;
SELECT * FROM Actor ORDER BY name ASC LIMIT 4;

SELECT * FROM Actor
WHERE gender = 'female'
ORDER BY name ASC
LIMIT 4;


SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

SELECT SUM(salary), gender
FROM Actor
GROUP BY gender;

SELECT id, name from Actor ORDER BY name DESC;
SELECT * FROM Actor ORDER BY salary ASC;
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
SELECT AVG(salary) gender FROM Actor GROUP BY gender;
