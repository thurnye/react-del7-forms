const Message = require('../model/model');


module.exports = {
    index,
    create
}

async function index(req, res) {
    const allMessage = await Message.find()
    res.json(allMessage)
}

async function create(req, res) {
    Message.create(req.body, (err, msg) => {
        res.status(200).json('okay')
    })
    
}