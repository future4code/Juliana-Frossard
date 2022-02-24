CREATE TABLE User(
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
nickname VARCHAR (255) NOT NULL,
email VARCHAR(255) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL
);

INSERT INTO User(id, name, nickname, email, password)
VALUES (
'2146as4d6a4d32as1d6sa87d4',
'Juliana',
'Ju',
'ju.frossard@email.com',
'senhacodificada');
SELECT * FROM User;

SELECT * FROM User WHERE email = 'ju.frossard@email.com';

