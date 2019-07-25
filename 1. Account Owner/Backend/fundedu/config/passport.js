const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("users");
const keys = require("../config/keys");
const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
    passport.use(
        new JwtStrategy(opts, (jwt_payload, done) => {
            User.findById(jwt_payload.id)
                .then(user => {
                    if (user) {
                        return done(null, user);
                    }
                    return done(null, false);
                })
                .catch(err => console.log(err));
        })
    );
}

exports.sign_in = (req, res) => {
    User.findOne({
        email: req.body.email
    }, (err, user) => {
        if (err) {
            return res.status(400).send({
                message: err
            })
        }
        if (!user) {
            res.status(404).json({ message: 'User not found' });
        } else if (!user.comparePassword(req.body.password)) {
            res.status(401).json({ message: 'Wrong password' });
        } else {
            return res.json({ 
                token: jwt.sign({ 
                    email: user.email, 
                    fullName: user.fullName, 
                    _id: user._id }, 'REDWOODAPIS') 
                }
            )
        }
    })
}