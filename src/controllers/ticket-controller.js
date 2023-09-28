const TicketService = require('../services/email-service');

const create = async (req, res) => {
    try {
        const response = await TicketService.createNotification(req.body);
        return res.status(201).json({
            success: true,
            data: response,
            error: {},
            message: "successfully registered an email!"
        })
    } catch (error) {
        console.log('error in controller:', error);
        return res.status(500).json({
            success: false,
            data: {},
            error: error,
            message: "unable to  register an email!"
        }) 
    }
}

module.exports = {
    create
}