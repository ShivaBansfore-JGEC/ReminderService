
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const { sendBasicEmail } = require('./services/email-service');
const { PORT } = require('./config/serverConfig');

const TicketController = require('./controllers/ticket-controller');
const jobs = require('./util/job')

const setupAndStartServer = async () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.post('/api/v1/tickets', TicketController.create);
    app.listen(PORT, () => {
        console.log(`Server started on port no: ${PORT}`);
        jobs();
    })
}

setupAndStartServer();