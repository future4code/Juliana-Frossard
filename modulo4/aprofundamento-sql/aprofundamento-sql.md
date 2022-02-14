//EXERCÍCIOS
1 -
a)ALTER TABLE Actor DROP COLUMN salary;
Esse  comando altera a tabela Actor para excluir a coluna salary

b)ALTER TABLE Actor CHANGE gender sex VARCHAR(6)
Esse comando altera a tabela Actor, mudando o gender para o nome sex e deixando
ele string de no maximo 6 caracteres

c)ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
Esse comando altera a tabela Actor, mudando para uma string de no maximo 255 caracteres

d)ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
Código que altera o gender para uma string de no maximo 100 caracteres

C reate
R ead
U pdate
D elete

2 -
a)UPDATE Actor SET name = "Claudia Raia" , birth_date = "1966-12-23"
WHERE id="003";

b)SELECT UPPER(name) from Actor
WHERE name = "Juliana Paes";

//está com erro nesse Update que eu tentei fazer 
e nao encontrei o erro
//encontrei o erro era configurações de segurança que ja veio por padrao, 
rodei o SET SQL_SAFE_UPDATES = 0;
e funcionou

UPDATE Actor SET name = "JULIANA PAES" 
WHERE name = "Juliana Paes";

c)UPDATE Actor SET 
name = "Fernanda Torres" , 
salary = 380000,
birth_date = "1965-09-15",
gender = "female"
WHERE id="005";

d)UPDATE Actor SET 
nome = "Nicette Bruno" 
WHERE id="015";

14:20:47	UPDATE Actor SET  nome = "Nicette Bruno"  WHERE id="015"	Error Code: 1054. Unknown column 'nome' in 'field list'	0.156 sec

troquei o name por nome e coloquei um ID inexistente 

3-
a)DELETE FROM Actor WHERE name = "Fernanda Montenegro";
b)DELETE FROM Actor WHERE gender = "male" AND salary>1000000;

4-
a)SELECT MAX(salary) FROM Actor;
b)SELECT MIN(salary) FROM Actor
WHERE gender="female";
c)SELECT COUNT(*) FROM Actor WHERE gender = "female";
d)SELECT SUM(salary) FROM Actor;

5-
a) SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
//ele conta quantas pessoas tem na tabela dividindo por generos (female, male)

SELECT SUM(salary), gender
FROM Actor
GROUP BY gender;
//ele soma os salarios das pessoas female e o salario dos male

b)SELECT id, name from Actor ORDER BY name DESC;
c)SELECT * FROM Actor ORDER BY salary ASC;
d)SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
e)SELECT AVG(salary) FROM Actor GROUP BY gender;

6-
a)ALTER TABLE Film ADD playing_limit_date DATE ;
b)ALTER TABLE Film CHANGE assessment assessment FLOAT;
c)UPDATE Film SET playing_limit_date = "2020-12-23"
WHERE id="001";

UPDATE Film SET playing_limit_date = "2023-12-23"
WHERE id="002";
d)DELETE FROM Film WHERE name = "Se Eu Fosse Você";
UPDATE Film SET synpose = "Se eu fosse voce" WHERE id="001";
15:16:34	UPDATE Film SET synpose = "Se eu fosse voce" WHERE id="001"	0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0	0.156 sec

Ele encontrou o id porem nao havia nada para atualizar, entao voltou ncom 0 affected

7-
a)SELECT * FROM Film WHERE assessment>7.5;
b)SELECT AVG(assessment) FROM Film;
c)SELECT COUNT(*) FROM Film WHERE playing_limit_date > CURDATE();
//só voltou um porque nao autalizei a data limite do restante
d)SELECT COUNT(*) FROM Film WHERE release_date > CURDATE();
e)SELECT MAX(assessment) FROM Film;
f)SELECT MIN(assessment) FROM Film;

8-
a)SELECT * FROM Film ORDER BY name ASC;
b)SELECT * FROM Film ORDER BY name DESC LIMIT 5;
c)SELECT * FROM Film 
WHERE release_date < CURDATE() ORDER BY release_date DESC LIMIT 3;
d)SELECT * FROM Film ORDER BY assessment DESC LIMIT 3;