import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import session from "express-session";
import { PORT, SECRET_KEY } from "../common";
import db from '../database';

class Server {

    constructor() {
        this.app = express();
        this.port = PORT;

        // database connection
        this.dbConnection();

        // Middlewares
        this.middlewares();

        // routes
        this.routes();
    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log('database connected');
        } catch (error) {
            console.log("Couln't connect to database");
        }
    }

    middlewares() {
        this.app.use(express.static('public'));
        this.app.use(morgan("dev"));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(session({ secret: SECRET_KEY, resave: true, saveUninitialized: true }));
        this.app.use(cors({ origin: "*" }));
    }

    routes() {
        this.app.get("/api", (req, res) => {
            res.status(200).json({
                message: `Welcome to Clothing Boutique API Developed by: Israel Santiago`,
            });
        });
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`listening on PORT ${this.port}`);
        });
    }
}

export default Server;