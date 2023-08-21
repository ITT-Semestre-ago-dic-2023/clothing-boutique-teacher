# Clothing Boutique System API

### [Ing. Israel Santiago](https://israelsantiago.com)

Project for the subject "Development and implementation of information systems". This is the demo repository that will be used as a guide for the development during the semester.

## Creation steps

This are the steps I have followed to create this project, I created this just for future references

#### 1. Create new Node.JS project:

```bash
npm init
```

This will create a new file `package.json` in the root of our directory, it may look similar to this:

```json
{
  "name": "api",
  "version": "0.0.1",
  "description": "backend for clothing boutique system",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Israel Santiago",
  "license": "MIT"
}
```

#### 2. Creating the folder structure:

```
├── src
│   ├── common/
│   │   ├── index.js
│   ├── controllers/
│   │   ├── index.js
│   ├── database/
│   │   ├── index.js
│   ├── middlewares/
│   │   ├── index.js
│   ├── models/
│   │   ├── index.js
│   ├── routes/
│   │   ├── index.js
│   ├── utils/
│   │   ├── index.js
│   ├── index.js
├── .env
├── package.json
└── README.md
```

#### 3. Install all the main dependencies that we'll need for this project:

_Install normal dependencies_

```bash
pnpm add bcrypt body-parser cors date-fns dotenv express express-session jsonwebtoken morgan mysql2 sequelize uuid
```

_Install development dependencies_

```bash
pnpm add -D nodemon
```

#### 4. Then add a few new script in the `package.json` file:

```json
  "scripts": {
    "dev": "nodemon src/index.js", // <-- new script
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

Now the `package.json` should look like this (the versions of some dependencies may be different):

```json
{
  "name": "api",
  "version": "0.0.1",
  "description": "backend for clothing boutique system",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon src/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Israel Santiago",
  "license": "MIT",
  "dependencies": {
    "bcrypt": "^5.1.1",
    "body-parser": "^1.20.2",
    "cors": "^2.8.5",
    "date-fns": "^2.30.0",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "express-session": "^1.17.3",
    "jsonwebtoken": "^9.0.1",
    "morgan": "^1.10.0",
    "mysql2": "^3.6.0",
    "sequelize": "^6.32.1",
    "uuid": "^9.0.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

#### 5. Finally, create our basic server

1. Go to `src/index.js` and create or first server:

```javascript
import "dotenv/config.js";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import session from "express-session";
import { PORT, SECRET_KEY } from "./common";

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: SECRET_KEY, resave: true, saveUninitialized: true }));
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.status(200).json({
    message: `Welcome to Clothing Boutique\n
    Developed by: Israel Santiago`,
  });
});

app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
});
```

2. Run our project:

```bash
pnpm run dev
```

3. Open your browser and to go `localhost:8000/`, you should see something like this:

![basic server response](public/images/basic-server-response.png)

#### 6. Commit and push this changes
