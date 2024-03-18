// const express = require('express');
// const route = express.Router();
const router = require("express").Router()

const { addUser, getAllUsers } = require('../Controller/User_controller');
const {newConversation, getConversation} = require('../Controller/conversation-controller')
const {newMessage} = require('../Controller/message_controller')


router.post('/add', addUser)
router.get('/users',getAllUsers)
router.post('/conversation/add', newConversation)
router.post('/conversation/get', getConversation)
router.post('/message/add', newMessage)


module.exports = router;