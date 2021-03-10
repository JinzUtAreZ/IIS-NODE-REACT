#Step by Step Instruction
#Project pointers

1. npm init ====== create predefined package.json
2. npm i express mssql
   a. express === server
   b. mssql === database used
3. dev dependencies installation:
   npm i -D nodemon concurrently
   a. nodemon === automatic restart of server
   b. concurrently === run front backend server simultaneously
4. run server using nodemon for automatic refresh using package.json
   npm run server
5. POSTMAN when posting data
   input middleware ===> app.use(express.json({ extended: false}));
   in app select "Headers" = "Content-Type" = "application/json"
   in body input json data ===>
   {
   "name": "John Doe",
   "email": "epal@gmail.com",
   "password": "1234"
   }
6. jwt.io check data sent using encoded token
7. POSTMAN Header tab input key = x-auth-token; Content-Type
   value = token after user has logged in; application/json
8. PUT request: input url with ID to be updated;
   { name: "update_name", others: "other_fields"}

#CREATE FRONT END

1. npx create-react-app client
2. In server package.json
   "client": "npm start --prefix client",
   "clientinstall": "npm install --prefix client",
   "dev": "concurrently \"npm run server\" \"npm run client\""
3. In client package.json
   "proxy": "http://localhost:5000"
4. remove .gitignore, Readme.md
5. npm i axios react-router-dom uuid react-transition-group

# Guide to snippets

1. https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets

#USE MATERIAL UI

1. npm install @material-ui/core, npm install @material-ui/icons
2. https://reactgo.com/material-ui-react-tutorial/
3. https://codesandbox.io/s/84xl2v8wm2
