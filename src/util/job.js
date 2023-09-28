const cron = require('node-cron');
const sender = require('../config/emailConfig');
const emailService = require('../services/email-service');
/**
 * 10:00 am
 * Every 5 minutes
 * We will check are there any pending email which was expected to be sent
 * by now
 */

const setUpJob = () => {
        cron.schedule('*/2 * * * *', async () => {
            const response = await emailService.fetchPendingEmails();

            response.forEach( email => {
                sender.sendMail({
                    to: email.recepientEmail,
                    subject: email.subject,
                    text: email.content
                }, async (err, data) => {
                    if(err){
                        console.log('err:', err);
                    }else{
                        await emailService.updateTicket(email.id, {status: 'SUCCESS'})
                    }
                })
            })
        })
}

module.exports = setUpJob;