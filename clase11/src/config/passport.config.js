import passport from "passport";
import local from 'passport-local';
import UserModel from "../model/user.model.js";
import { createHash, isValidPassword } from "../utils.js";


const LocalStrategy = local.Strategy

const initializePassport = () => {
    //register para registrar con local
    passport.use('register', new LocalStrategy(
        {
            //recibir request
            passReqToCallback: true,
            //pasarle el email
            usernameField: 'email'
        }, async (req, username, password, done) => {
            const { name, email } = req.body
            try {
                const user = await UserModel.findOne({ email: username })
                if (user) {
                    console.log('user already exists');
                    return done(null, false)
                }
                const newUser = {
                    name,
                    email,
                    password: createHash(password)
                }
                const result = await UserModel.create(newUser)
                return done(null, result)
            } catch (e) {
                return done('error to register' + error)
            }
        }
    ))
    //login locally
    passport.use('login', new LocalStrategy(
        { usernameField: 'email' },
        async (username, password, done) => {
            try {
                const user = await UserModel.findOne({ email: username }).lean().exec()
                if (!user) {
                    console.error('user no existe');
                    return done(null, false)
                }
                if (!isValidPassword(user, password)) {
                    console.error('password not valid');
                    return done(null, false)
                }
                return done(null, user)
            } catch (e) {
                return done('error login' + error)
            }

        }
    ))

    passport.serializeUser((user, done) => {
        done(null, user._id)
    })

    passport.deserializeUser(async (id, done) => {
        const user = await UserModel.findById(id)
        done(null, user)
    })

}

export default initializePassport