1-
a)Chave estrangeira é o valor que tomamos como referencia em outra tabela
por exemplo, se eu for fazer uma avaliacao de um filme, novela, eu preciso ter como referencia o id do filme e novela, para garantir que a avaliação vai realmente para o filme/novela determinado por mim
b)CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    film_id VARCHAR(255),
    FOREIGN KEY (film_id) REFERENCES Film(id)
);
INSERT INTO Rating (id, comment, rate, film_id)
VALUES(
  "2a",
  "Nunca assisti",
  8,
  "002"
);

INSERT INTO Rating (id, comment, rate, film_id)
VALUES(
  "1a",
  "Filme perfeito, amei cada segundo",
  10,
  "004"
);
INSERT INTO Rating (id, comment, rate, film_id)
VALUES(
  "3a",
  "òtimo filme",
  8,
  "005"
);
INSERT INTO Rating (id, comment, rate, film_id)
VALUES(
  "4a",
  "EU VOU AMAAAAAAR. ANSIOSA",
  10,
  "006"
);
c)ao tentar criar uma avaliaçao para um id que era inválido voltoui o erro
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`carver-juliana-scandola-frossard`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`film_id`) REFERENCES `Film` (`id`))	0.171 sec

d)ALTER TABLE Film CHANGE assessment rating INT (10);

No meu código estava como assessment e mudei para rating
apresentou esse warning
13:18:49	ALTER TABLE Film CHANGE assessment rating INT (10)	4 row(s) affected, 1 warning(s): 1681 Integer display width is deprecated and will be removed in a future release. Records: 4  Duplicates: 0  Warnings: 1	0.235 sec

//depois de verificar nas dicas vi o código
ALTER TABLE Film DROP COLUMN assessment;
que apresentou o erro:
13:24:24	ALTER TABLE Film DROP COLUMN assessment	Error Code: 1091. Can't DROP 'assessment'; check that column/key exists	0.156 sec

e)DELETE FROM Film WHERE id="002";

13:21:40	DELETE FROM Film WHERE id="002"	Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`carver-juliana-scandola-frossard`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`film_id`) REFERENCES `Film` (`id`))	0.156 sec

2-
CREATE TABLE MovieCast (
		film_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (film_id) REFERENCES Film(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
a)Essa tabela seria uma tabela intermediaria, que ajuda a juntar a tabela de filmes com a tabela de atores.
ela referencia o id da tabela Actor e o id da tabela Film, fazendo com que as informações se complementem
b)
ADICIONANDO AO FILME DOCE DE MAE

-ator Marco Ricca
    INSERT INTO MovieCast (film_id, actor_id)
VALUES(
  "002",
  "007"
  );

-atriz Mirna Spritzer
    INSERT INTO MovieCast (film_id, actor_id)
VALUES(
  "002",
  "008"
  );

ADICIONANDO AO FILME HOJE EU QUERO VOLTAR SOZINHO

-ator Guilherme Lobo
    INSERT INTO MovieCast (film_id, actor_id)
VALUES(
  "004",
  "009"
  );
 
-atriz Selma Egrei
      INSERT INTO MovieCast (film_id, actor_id)
VALUES(
  "004",
  "010"
  );

  ADICIONANDO AO FILME A VIDA INVISÍVEL

  -atriz Cristina Pereira
        INSERT INTO MovieCast (film_id, actor_id)
VALUES(
  "005",
  "011"
  );

  - atriz Carol Duarte
        INSERT INTO MovieCast (film_id, actor_id)
VALUES(
  "005",
  "012"
  );

  ADICIONANDO AO FILME LIGHTYEAR

  -boneco Buzz Lightyear
            INSERT INTO MovieCast (film_id, actor_id)
VALUES(
  "006",
  "013"
  );
  -Imperador Zurg
            INSERT INTO MovieCast (film_id, actor_id)
VALUES(
  "006",
  "013"
  );

  c) INSERT INTO MovieCast (film_id, actor_id)
VALUES(
  "130",
  "120"
  ); 
  
  14:28:53	INSERT INTO MovieCast (film_id, actor_id) VALUES(   "130",   "120"   )	Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`carver-juliana-scandola-frossard`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`film_id`) REFERENCES `Film` (`id`))	0.156 sec


  d)DELETE FROM Actor WHERE id="009";

  14:10:02	DELETE FROM Actor WHERE id="009"	Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`carver-juliana-scandola-frossard`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))	0.140 sec


3)
SELECT * FROM Film 
INNER JOIN Rating ON Film.id = Rating.film_id;
a)o cógido acima usa o select para selecionar e mostrar dados da tabela Film
que tenha o Film.id = Rating.film_id

b) SELECT film_id, name, rating, rate from Film 
INNER JOIN Rating ON Film.id = Rating.film_id;

4-
a)SELECT film_id, name, rate , comment 
FROM Film LEFT JOIN Rating ON Film.id = Rating.film_id;