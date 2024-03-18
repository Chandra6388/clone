
const Message = require('../Modle/message_modal'); 
const Conversation = require('../Controller/conversation-controller');

const newMessage = async (req, res) => {
    try {
        console.log("text :", req.body)
        const newMsg = new Message(req.body.text);
        await newMsg.save();

        await Conversation.findByIdAndUpdate(req.body.conversationId, {messages:req.body.text})
        return res.status(200).json("message has been send successfully")

    }
    catch (error) {
        console.log("cpp2")
        return res.status(500).json(error.messages)

    }
}


module.exports = { newMessage }