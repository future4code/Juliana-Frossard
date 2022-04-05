EXERCICIOS

1-
a)é melhor utilizar string pois é mais dificil de decodificar e mais facil de manusear no codigo
b)criado a funcao de gerar id dentro de services

2-
a)primeiro ele faz uma const para guardar a tabela que ia utilizar
depois ele faz a conexao com o banco de dados atraves do knex
em seguida faz uma funcao assincrona para criar usuario, precisando somente do id, email e senha
b)CREATE TABLE User(
id VARCHAR(255) PRIMARY KEY,
email VARCHAR(255) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL
);
c)função criada na pasta data

3-
a)ela transforma a senha-chave que fica no .env em string, para que o token seja uma string 
e nao seja possivel decodifica-lo
b)funcao token criada sentro de services

4-feito o signUp dentro de endpoints

5-feito o searchUserByEmail dentro de endpoints

6-feito o login dentro de endpoints

7-colocado o getData dentro de services
a)as any significa que o resultado fica em aberto, pode ser qualquer coisa de qualquer tipo

8 - não funciona