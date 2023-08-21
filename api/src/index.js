import "dotenv/config.js";
import Server from './models/server';

const server = new Server();

server.listen();