npm init --yes 
npm i express cors knex mysql dotenv axios uuid jsonwebtoken bcryptjs 
npm i -D typescript ts-node ts-node-dev @types/express @types/cors @types/axios @types/uuid @types/jsonwebtoken @types/bcryptjs 

touch .env .gitignore tsconfig.json 

mkdir build, src
touch src/index.ts, src/app.ts 
mkdir src/Data, src/API, src/Types, src/Utilities, src/Services  
touch src/Data/connection.ts, src/Utilities/idGenerator.ts, src/Utilities/tokenGeneractor.ts, src/Utilities/authenticator.ts, src/Services/hashManager.ts