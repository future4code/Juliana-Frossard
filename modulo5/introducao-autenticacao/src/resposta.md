EXERCICIOS

1-
a) gerar string é muito melhor pois tem menor chance de se repetir
b) import { v4 } from "uuid";

export const generateId = (): string =>{
    return v4()
}

2- primeiro ele faz uma const com o nome da tabela a ser usada
faz a conexao com o banco de dados
depois uma funcao assincrona para criar usuario que rece id, email e senha,
e insere na const que é a tabela do banco de dados

b)
CREATE TABLE User(
id VARCHAR(255) PRIMARY KEY,
email VARCHAR(255) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL
);

3-
a)as string transforma o que vier na chave secreta em 'texto',
b) Não entendi

4-  
