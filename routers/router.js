"use strict"

const express = require('express')
const Contoller = require('../controllers/controller')
const router = express.Router();


router.get('/', Contoller.showHome);
router.post('/register',Contoller.postRegisterUser);

router.post('/login',Contoller.postLoginUser);
router.get('/logout',Contoller.getLogout); //ditambah

router.use(function(req,res,next){
  
    if(!req.session.userId){
        const error = 'please login first'
        res.redirect(`/?error=${error}`)
    }else{
        console.log('berhasil middleware')
        console.log(req.session)
        next();
    }

   
})

router.get('/homeLogin',Contoller.showHomeLogin)
router.get('/categories', Contoller.showCategory);
//router.get("/rooms",Contoller.showRooms);
//router.get("/bookings",Contoller.showBooking);
//router.post('/addBooking',Contoller.postAddBooking);
//router.get("./profile",Contoller.showUserProfile);
module.exports = router