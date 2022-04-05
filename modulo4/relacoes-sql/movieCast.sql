CREATE TABLE MovieCast (
		film_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (film_id) REFERENCES Film(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

SELECT * FROM MovieCast;

INSERT INTO MovieCast (film_id, actor_id)
VALUES(
  "002",
  "007"
  );

  INSERT INTO MovieCast (film_id, actor_id)
VALUES(
  "002",
  "008"
  );
  
    INSERT INTO MovieCast (film_id, actor_id)
VALUES(
  "004",
  "009"
  );
  
      INSERT INTO MovieCast (film_id, actor_id)
VALUES(
  "005",
  "011"
  );
  
        INSERT INTO MovieCast (film_id, actor_id)
VALUES(
  "005",
  "012"
  );
  
          INSERT INTO MovieCast (film_id, actor_id)
VALUES(
  "006",
  "013"
  );
            INSERT INTO MovieCast (film_id, actor_id)
VALUES(
  "006",
  "014"
  );
  
#forçando erro colocando id errado
            INSERT INTO MovieCast (film_id, actor_id)
VALUES(
  "130",
  "120"
  ); 
  
DELETE FROM MovieCast WHERE film_id="005" AND actor_id="012";