CREATE TABLE Rating (
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