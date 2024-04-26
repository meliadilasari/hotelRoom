"use strict"

const idr = require('../helpers/helper')
const {Category} = require('../models');
const {User, UserProfile} = require('../models/index');
const bcrypt = require('bcryptjs');

class Contoller {
    static showHome(req, res) {
        try {
            const {error} = req.query
            console.log (error) 
            res.render('viewHome',{error})

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
                console.log('berhasil registrasi user')
                res.redirect("/")

          //  console.log(req.body)

        } catch (error) {
            res.redirect(`/error=${error}`)
            //res.send(error.message);
            console.log(error)
        }
    }
    //diubah
    static async postLoginUser(req, res) {
        try {
           let { username, password} = req.body
           
           let findUser =  await User.findOne({
               where: {username}
               })

               if(findUser){
                    const isValidPassword = bcrypt.compareSync(password, findUser.password);

                    if(isValidPassword){
                        req.session.userId = findUser.id;
                        req.session.userRole = findUser.role;
                        return res.redirect("/homeLogin")
                    }else{
                        const error = 'invalid username/password'
                        return res.redirect(`/?error=${error}`)
                    }
               }

        } catch (error) {
            res.send(error.message);
            console.log(error)
        }
    }
    
    static async showHomeLogin(req, res) {
        try {
            
           // let dataRooms = await Room.findAll()
           let userId = req.session.userId
           let data = await User.findByPk(userId, {
            include: [UserProfile] // Corrected the model reference here
        });
            //res.send(data)
           res.render('viewHomeLogin',{data})
            
        } catch (error) {
            res.send(error.message)
            console.log(error)
        }
    }
    //ditambah
    static async getLogout(req, res) {
        try {
           req.session.destroy((err) => {
            if(err) {
                console.log(err);
                res.send(err)
            }
            else{
            res.redirect('/')
            }
           })
        } catch (error) {
            res.send(error.message)
            console.log(error)
        }
    }
    //ditambah
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