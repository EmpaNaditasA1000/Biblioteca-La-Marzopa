const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("dbLaMarzopa.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 30004;

server.use(middlewares);
server.use(router)

server.listen(port)
