const Conversation = require('../Modle/conversation_model');

const newConversation = async (req, res) => {
    try {
        const senderId = req.body.senderId;
        const receiverId = req.body.receiverId;
        const exist = await Conversation.findOne({ members: { $all: [receiverId, senderId] } });
        if (exist) {
            return res.status(200).json('Conversation already exists');
        }
        const newConversation = new Conversation({
            members: [senderId, receiverId]
        });
        await newConversation.save();
        return res.status(200).json('Conversation saved successfully');
    } catch (error) {
        return res.status(500).json(error.message);
     }
};

const getConversation = async (req, res) => {
    const senderId = req.body.senderId;
    const receiverId = req.body.reciverId;
    try {
        let conversation = await Conversation.findOne({ members: { $all: [receiverId, senderId] } });
        console.log('conversation :', req.body.reciverId)
        return res.status(200).json(conversation);
    }
    catch (error) {
        return res.status(500).json(error.message);
    }
}

module.exports = { newConversation, getConversation };
