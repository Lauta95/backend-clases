import passport from "passport";
import local from 'passport-local';
import UserModel from "../model/user.model.js";
import { createHash, isValidPassword } from "../utils.js";
import GitHubStrategy from 'passport-github2'
import jwt from 'passport-jwt'

// App ID: 375160

// Client ID: Iv1.270c5a68790735e4
// 26da0872da06c1c2f41f76b67f88c934f71a60e5

const LocalStrategy = local.Strategy
const JWTStrategy = jwt.Strategy // estrategia de jwt
const ExtractJWT = jwt.ExtractJWT // funcion de extracción

const cookieExtractor = req => {
    const token = (req?.cookies) ? req.cookies['Tokenn'] : null
    console.log('cookie extractor: ', token)
    return token
}


const initializePassport = () => {

    passport.use(
        'jwt',
        new JWTStrategy(
            {
                jwtFromRequest: ExtractJWT.fromExtractors([cookieExtractor]),
                secretOrKey: 'coderTokenForJWT'
            },
            async (jwt_payload, done) => {

                try {
                    return done(null, jwt_payload)
                } catch (e) {
                    return done(e)
                }
            })
    )

    passport.use('github', new GitHubStrategy(
        {
            clientID: 'Iv1.270c5a68790735e4',
            clientSecret: '26da0872da06c1c2f41f76b67f88c934f71a60e5',
            callbackURL: 'http://127.0.0.1:8080/githubcallback'
        },
        async (accessToken, refreshToken, profile, done) => {
            console.log(profile);

            try {
                const user = UserModel.findOne({ email: profile._json.email })
                if (user) {
                    console.log('user already exists' + email);
                    return done(null, user)
                }
                const newUser = {
                    name: profile._json.name,
                    email: profile._json.email,
                    password: ''
                }
                const result = await UserModel.create(newUser)
                return done(null, result)
            } catch (e) {
                return done('error to login with github' + error)
            }
        }
    ))

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