CREATE TABLE CreateTask (
	id VARCHAR(255) PRIMARY KEY, 
    title VARCHAR(255) NOT NULL, 
    status VARCHAR(255) NOT NULL DEFAULT "to_do",
    description TEXT NOT NULL, 
    limitDate DATE NOT NULL,
    creatorUserId varchar(255) NOT NULL,
    FOREIGN KEY (creatorUserId) REFERENCES ToDoList(id)
);
INSERT INTO CreateTask (id, title, status, description, limitDate, creatorUserID)
VALUE (
"a",
"Ensaiar",
"to_do",
"ler o roteiro e ensaiar com o restante do elenco",
"2022/06/04",
"001"
);
INSERT INTO CreateTask (id, title, status, description, limitDate, creatorUserID)
VALUE (
"b",
"Viajar",
"doing",
"ter muitas aventuras ",
"2022/04/02",
"002"
);
INSERT INTO CreateTask (id, title, status, description, limitDate, creatorUserID)
VALUE (
"c",
"Beber água",
"done",
"beber água com mais frequencia",
"2020/04/02",
"003"
);