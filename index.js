// index.js 
// json-server demo 

const jsonServer = require('json-server');
const server = jsonServer.create();

// Create a json-server with our JSON file on disk
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(router);

// Configure port for Heroku deploy
const port = process.env.PORT || 5151;

// Start the server
server.listen(port);