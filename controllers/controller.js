"use strict"

const idr = require('../helpers/helper')
const {Category} = require('../models')

class Contoller {
    static showHome(req, res) {
        try {
            res.render('viewHome')

        } catch (error) {
            res.send(error.message)
        }
    }

    static async showCategory(req, res) {
        try {
            let dataCategory = await Category.findAll()
            res.render('viewCategory', {dataCategory, idr})

        } catch (error) {
            res.send(error.message)
        }
    }

    static async postRegisterUser(req, res) {
        try {
           let {fullName, username, gender, dateOfBirth, address, nik, email, password} = req.body
            // let dataCategory = await Category.findAll()
            // res.render('viewCategory', {dataCategory, idr})
           let newUser =  await User.create({
                username,
                password,
                level,
                email
               })

            await UserProfile.create({
                    fullName,
                    gender,
                    dateOfBirth,
                    address,
                    nik,
                    UserId : newUser.id
                })
                res.redirect("/")
            console.log(req.body)

        } catch (error) {
            res.send(error.message);
            console.log(error)
        }
    }

    
    static async showRooms(req, res) {
        try {
            let dataRooms = await Room.findAll()
            res.render('viewRoom', {dataRooms})

        } catch (error) {
            res.send(error.message)
        }
    }

    static async showBooking(req, res) {
        try {
            let dataSchedule = await Schedule.findAll()
            res.render('viewBooking', {dataSchedule})

        } catch (error) {
            res.send(error.message)
        }
    }

    static async showUserProfile(req, res) {
        try {
            let dataUserProfile = await UserProfile.findAll()
            res.render('viewUserProfile', {dataUserProfile})

        } catch (error) {
            res.send(error.message)
        }
    }
}



module.exports = Contoller