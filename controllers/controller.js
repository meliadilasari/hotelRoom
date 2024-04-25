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

    static async postAddUser(req, res) {
        try {
            // let dataCategory = await Category.findAll()
            // res.render('viewCategory', {dataCategory, idr})

        } catch (error) {
            res.send(error.message)
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