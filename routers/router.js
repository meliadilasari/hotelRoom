"use strict"

const express = require('express')
const Contoller = require('../controllers/controller')
const router = express.Router()

router.get('/', Contoller.showHome);
router.get('/categories', Contoller.showCategory);
router.post('/register',Contoller.postRegisterUser);
//router.get("/rooms",Contoller.showRooms);
//router.get("/bookings",Contoller.showBooking);
//router.post('/addBooking',Contoller.postAddBooking);
//router.get("./profile",Contoller.showUserProfile);
module.exports = router