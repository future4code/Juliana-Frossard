//fiz a tabela no mySql

CREATE TABLE userLaBook(
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM ('ADMIN', 'NORMAL') DEFAULT 'NORMAL'
    );
    
    CREATE TABLE postLaBook(
    id VARCHAR(255) PRIMARY KEY,
    photo TEXT NOT NULL,
    description VARCHAR (15555) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    role ENUM ('EVENT', 'NORMAL') DEFAULT 'NORMAL',
    user_id VARCHAR (255),
    foreign key (user_id) REFERENCES userLaBook(id)
    );