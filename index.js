import express from "express";
import cors from "cors";
import winston from "winston";
import clientesRouter from "./routes/cliente.route.js";
import livrosRouter from "./routes/livro.route.js";
import autoresRouter from "./routes/autor.route.js";
import vendasRouter from "./routes/venda.route.js";
import defaultRouter from "./routes/default.route.js";
import expressBasicAuth from "express-basic-auth";
// import myBasicAuth from "./middleware/basicAuth.js";

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({level, message, label, timestamp}) => {
    return `${timestamp} [${label}] ${level} ${message}`;
});

global.logger = winston.createLogger({
    level: "silly",
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({filename: "livraria-api.log"})
    ],
    format: combine(
        label({ label: "livraria-api"}),
        timestamp(),
        myFormat
    )
});

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", defaultRouter);
app.use("/cliente", clientesRouter);
app.use("/autor", autoresRouter);
app.use("/venda", vendasRouter);

function getRoles(username) {
    if(username == 'admin') {
        return 'admin';
    } else {
        return 'regular';
    }
}

function authorize(...allowed) {

    const isAllowed = role => allowed.indexOf(role) > -1;

    return (req, res, next) => {
        if(req.auth.user) {
            const role = getRoles(req.auth.user);

            if (isAllowed(role)) {
                next();
            } else {
                res.status(401).send('Role not allowed');
            }
        } else {
            res.status(403).send('User not found');
        }
    }
}

app.use(expressBasicAuth({ authorizer: myBasicAuth }));

function myBasicAuth(username, password) {
    const defaultAdmin = { user: 'admin', pwd: 'desafio-igti-nodejs'};
    const userMatches = expressBasicAuth.safeCompare(username, defaultAdmin.user);
    const pwdMatches = expressBasicAuth.safeCompare(password, defaultAdmin.pwd);
    return userMatches && pwdMatches;
}

app.use("/livro",authorize('admin'), livrosRouter);

app.use((err, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
    res.status(400).send({error: err.message});
})

app.listen(3000, () => console.log("API Started!"));