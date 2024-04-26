"use strict"

const express = require('express')
const app = express()
const port = 5000


const bodyParser = require('body-parser');
const session = require('express-session');

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure:false,
        sameSite: true
    }
}))
app.use(require('./routers/router'))

app.listen(port, () => {
    console.log(`App Running on Port ${port}`)
})

/*
npx sequelize-cli model:generate --name User --attributes username:string,password:string,email:string,role:string
npx sequelize-cli model:generate --name UserProfile --attributes fullName:string,gender:string,dateOfBirth:date,address:string,nik:integer,UserId:integer
npx sequelize-cli model:generate --name Schedule --attributes UserId:integer,RoomId:integer,ordererName:string,email:string,checkIn:date,checkOut:date
npx sequelize-cli model:generate --name Room --attributes name:string,description:text,imgUrl:string,status:string,CategoryInt:integer

*/