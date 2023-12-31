
const sender = require('../config/emailConfig');
const TicketRepository = require('../repository/ticket-repository');
const repo = new TicketRepository();

const sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
    try {
        const response = await sender.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailBody
        })
    } catch (error) {
        console.log('error:', error);
    }
}

const fetchPendingEmails = async (timeStamp) => {
    try {
        const response = await repo.get({status: "PENDING"});
        return response;
    } catch (error) {
        console.log('error:', error);
    }
}

const createNotification = async (data) => {
    try {
      const response = await repo.create(data);
      return response;  
    } catch (error) {
        console.log('error in the service layer:', error);
        throw error;
    }
}

const updateTicket = async (ticketId, data) => {
    try {
        const response = await repo.update(ticketId, data);
        return response;
    } catch (error) {
        console.log('error in the service layer:', error);
        throw error;
    }
}

module.exports = {
    sendBasicEmail,
    fetchPendingEmails,
    createNotification,
    updateTicket
}