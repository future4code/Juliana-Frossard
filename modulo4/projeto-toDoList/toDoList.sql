CREATE TABLE ToDoList (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL UNIQUE,
    nickname VARCHAR (255) NOT NULL,
    email VARCHAR (255) NOT NULL UNIQUE
);

INSERT INTO ToDoList (id, name, nickname, email)
VALUES(
  "001", 
  "Will Smitch ",
  "Will",
  "willsmitch@email.com"
);
INSERT INTO ToDoList (id, name, nickname, email)
VALUES(
  "002", 
  "Maryl Streep",
  "Mary",
  "marylstreep@email.com"
);
INSERT INTO ToDoList (id, name, nickname, email)
VALUES(
  "003", 
  "Angelina Jolie",
  "Angel",
  "angelinajoelie@email.com"
);
INSERT INTO ToDoList (id, name, nickname, email)
VALUES(
  "004", 
  "Tom Cruise",
  "Tom",
  "tomcruise@email.com"
);
INSERT INTO ToDoList (id, name, nickname, email)
VALUES(
  "005", 
  "Sandra Bullock",
  "Sandra",
  "sandrabullock@email.com"
);

SELECT * FROM ToDoList;
SELECT id, nickname FROM ToDoList;

EXPLAIN ToDoList;

ALTER TABLE ToDoList ADD UNIQUE (email);
ALTER TABLE ToDoList ADD UNIQUE (name);