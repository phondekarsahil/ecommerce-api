# ecommerce-api  

`npm init -y`

This is to initialize the project as a nodeJS project.

This will create a *package.json* file

`-y` will automatically fill the *package.json* file

---
`npm install --save express`

This will install and save express in the project and update the `dependencies` in *package.json* file.

---
`npm install --save-dev nodemon`

This will save and install nodemon as a development dependency and update the `devDependencies` in *package.json* file.

devDependencies are used only for development purposes

---
`npm start`

To use *nodemon* as a development server update the *package.json* file first as

`"scripts": {
    "start": "nodemon app.js"
  }`

This will start the server

---
`npm install --save body-parser`

This will save and install body-parser

---