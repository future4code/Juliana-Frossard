CREATE TABLE Film (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL UNIQUE,
    synpose TEXT NOT NULL,
    release_date DATE NOT NULL,
    assessment INT (10)
);

INSERT INTO Film (id, name, synpose, release_date, assessment)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. 
  Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  7
);

INSERT INTO Film (id, name, synpose, release_date, assessment)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. 
  A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, 
  empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  10
);

INSERT INTO Film (id, name, synpose, release_date, assessment)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, 
  que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  8
);
INSERT INTO Film (id, name, synpose, release_date, assessment)
VALUES(
  "004", 
  "Hoje eu quero voltar sozinho",
  "Leonardo (Ghilherme Lobo), um adolescente cego, tenta lidar com a mãe superprotetora ao mesmo tempo 
  em que busca sua independência. Quando Gabriel (Fabio Audi) chega na cidade, 
  novos sentimentos começam a surgir em Leonardo, fazendo com que ele descubra mais sobre si mesmo 
  e sua sexualidade. ",
  "2014-04-10", 
  9
);
INSERT INTO Film (id, name, synpose, release_date, assessment)
VALUES(
  "005", 
  "A vida invisível",
  "Rio de Janeiro, anos 1940. Eurídice (Carol Duarte), 
  uma jovem talentosa mas bastante introvertida, e Guida (Julia Stockler), 
  o oposto de seu temperamento, são duas irmãs inseparáveis que moram com os pais em um lar conservador. 
  Mesmo tendo um forte elo que as une, elas trilham caminhos distintos: Guida decide fugir de casa com o namorado, 
  enquanto Eurídice se esforça para se tornar uma musicista, ao mesmo tempo em que precisa lidar com as responsabilidades da vida adulta e um casamento sem amor com Antenor (Gregório Duvivier). ",
  "2019-09-19", 
  8
);
INSERT INTO Film (id, name, synpose, release_date, assessment)
VALUES(
  "006", 
  "Lightyear",
  "Lightyear contará a origem do patrulheiro espacial de Toy Story, Buzz Lightyear",
  "2022-06-16", 
  8
);

#SELECT id, name from Film WHERE id = "002";
#SELECT id, name from Film WHERE name = "Doce de mãe";
#SELECT id, name, synpose, assessment from Film WHERE assessment >= 7;
#SELECT name from Film WHERE name LIKE "%vida%";
#SELECT name from Film WHERE name LIKE "%dia%" OR synpose LIKE "%dia%";
#SELECT id, name, synpose, assessment from Film WHERE release_date < "2022-01-31"

#SELECT id, name, synpose, assessment from Film WHERE release_date < "2022-01-31"
#AND name LIKE "%dia%" OR synpose LIKE "%cego%"
#AND assessment >= 7;

#SELECT * FROM Film
#WHERE release_date < CURDATE() AND 
#     (name LIKE "%TERMO DE BUSCA%" OR
#     synpose LIKE "%TERMO DE BUSCA%");
# //copiado do notion para teste do CURDATE

