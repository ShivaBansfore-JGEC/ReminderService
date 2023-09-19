
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const { sendBasicEmail } = require('./services/email-service');
const { PORT } = require('./config/serverConfig');

const setupAndStartServer = async () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.listen(PORT, () => {
        console.log(`Server started on port no: ${PORT}`);
        sendBasicEmail(
            'support@admin.com',
            'developer.shiva777@gmail.com',
            'This is a testing email',
            'hey how are you i hope you like the service'
        )
    })
}

setupAndStartServer();