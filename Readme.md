=>it is crucial to have a clean, modular and scalable structure .
and for this we have crucial files and folders in our project.
1. app.js- Express app config 
    =>Sets up Express (express()), middleware, routes, error handlers, etc
    =>Keeps all Express-related logic in one place.
2. index.js-Entry point 
    =>Starts the server (calls app.listen())
    =>Imports and runs the Express app from app.js
    =>Keeps server start logic separate from app configuration.
3. constants.js – Global config values
    => to store fix values like API_KEY, port nums , messages , DB urls etc.

Folder Structure :-
1. Controllers/ => Request Handler
                => logic for each route ex-create user , login
2. routes/ => URL definitions
           => route paths and their corresponding controller functions.
3. models/ => Database schemas
           =>Define MongoDB schemas using Mongoose or Sequelize models
4.  db/    => Database connection
           =>Code to connect to MongoDB.
5. middleware/ => Custom middleware
               =>For authentication, error handling, logging, etc.
6. utils/ => helper functions
          =>Reusable logic like file uploads, formatters, validators