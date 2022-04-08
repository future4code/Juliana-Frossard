CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
#SHOW TABLES;
#SHOW DATABASES;

#DESCRIBE Actor;

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
 120000,
  "1963-08-23", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Juliana Frossard",
 10000000,
  "1993-10-28", 
  "female"
);
#Error Code: 1062. Duplicate entry '002' for key 'PRIMARY' 0.156 sec;
#Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY' 0,156 s;

INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
#Error Code: 1136. Column count doesn't match value count at row 1	0.156 sec;
#Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1 0,156 s

INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
#Error Code: 1364. Field 'name' doesn't have a default value	0.141 sec;
#Código de erro: 1364. O campo 'nome' não tem um valor padrão 0,141 seg;

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
#Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1 0.156 sec;
#Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1 0,156 s

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Rodrigo Santoro",
  350000,
  "1975-08-22", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Marco Ricca",
  2000,
  "1962-11-28", 
  "male"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "008", 
  "Mirna Spritzer",
  30000,
  "1957-03-03", 
  "female"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "009", 
  "Guilherme Lobo",
  30000,
  "1995-02-08", 
  "male"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "010", 
  "Selma Egrei",
  3000,
  "1949-01-01", 
  "female"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "011", 
  "Cristina Pereira",
  3000,
  "1949-08-09", 
  "female"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "012", 
  "Carol Duarte",
  3000,
  "1991-07-10", 
  "female"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "013", 
  "Buzz Lightyear",
  10000000000,
  "1995-05-12", 
  "male"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(

  "014", 
  "Imperador Zurg",
  100000,
  "1995-05-12", 
  "male"
);

SELECT * FROM Actor;
#SELECT id, salary from Actor ;
#SELECT id, name from Actor WHERE gender = "male";
#SELECT id, name from Actor WHERE gender = "female";
#SELECT salary from Actor WHERE name = "Tony Ramos";
#SELECT id, name from Actor WHERE gender = "invalid" ;
#TODOS TEM GENEROS DEFINIDOS
#SELECT id, name, salary from Actor WHERE salary <= 500000;

#SELECT id, nome from Actor WHERE id = "002";
#Error Code: 1054. Unknown column 'nome' in 'field list'	0.140 sec
#Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos' 0,140 seg
#o certo é name em ingles e não nome

#SELECT id, name from Actor WHERE id = "002";
#SELECT name, salary from Actor WHERE salary>300000 AND name LIKE "A%" OR name LIKE "J%";

SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

#SELECT * FROM Actor
#WHERE name NOT LIKE "A%" AND salary >350000;

#SELECT * FROM Actor
#WHERE name LIKE "%g%" OR name LIKE "%G%";

#SELECT * FROM Actor
#WHERE name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%"  OR name LIKE "%A%" 
#AND 350000 < salary < 900000 ;

#SELECT * FROM Actor
#WHERE 
#(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
#AND salary BETWEEN 350000 AND 900000; //copiado no notion

DELETE FROM Actor WHERE id="009";
