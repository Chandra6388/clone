const mongoose = require('mongoose');

const MessagesSchema = new mongoose.Schema({
    conversationId:{
        type:String
    },
    senderId:{
        type:String
    },
    receiverId:{
        type:String,
    },
    text:{
        type:String,
    },
    type:{
        type:String,
    }},
    {
        timestamps:true
    })

    const message= mongoose.model("message", MessagesSchema);
    module.exports = message;
  
  