
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const { PORT } = require('./config/serverConfig');

const setupAndStartServer = async () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.listen(PORT, () => {
        console.log(`Server started on port no: ${PORT}`);
    })
}

setupAndStartServer();