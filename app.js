require("dotenv").config();
const jsonServer = require("json-server");
const morgan = require("morgan");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults();

server.use(morgan("dev"));
server.use(middleware);
server.use(router);
server.use((req, res, next) => {
  req.headers("Access-Control-Allow-Origin", "*");
  next();
});

const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`JSON Server is running at port ${PORT}`);
});
