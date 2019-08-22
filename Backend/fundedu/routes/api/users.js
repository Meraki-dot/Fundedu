const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
const User = require("../../models/User");

router.post("/register", (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json({ email: "Email already exists" });
        }
        else {
            const newUser = new User({
                userType: req.body.userType,
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                funds: req.body.funds
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                })
            })
        }
    })
})

router.post("/login", (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email }).then(user => {
        if (!user) {
            return res.status(404).json({ emailNotFound: "Email not found" });
        }

        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                const payload = {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    userType: user.userType,
                    associates: user.associates,
                    funds: user.funds
                }

                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                        expiresIn: '2d'
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        })
                    }
                )
            }
            else {
                return res.status(400).json({ passwordIncorrect: "Password incorrect" })
            }
        })
    })
})

router.get('/', (req, res) => {
    User.find()
        .exec((err, user) => {
            if (err) { res.status(500).send({ success: false, error: err.message }); }
            else { res.status(200).send({ success: true, data: user }); }
        });
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    User.findById(id)
        .exec((err, user) => {
            if (err) { res.status(500).send({ success: false, error: err.message }); }
            else if (!user) { res.status(404).send({ success: false, message: 'There were no users with that id found.' }); }
            else { res.status(200).send({ success: true, data: user }); }
        });
})

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const newUser = { ...req.body };
    User.findByIdAndUpdate(id, newUser, { new: true }, (err, user) => {
        if (err) { res.status(500).send({ success: false, error: err.message }); }
        else if (!user) { res.status(404).send({ success: false, message: 'There were no users with that id found.' }); }
        else {
            const payload = {
                id: user.id,
                name: user.name,
                userType: user.userType,
                associates: user.associates,
                funds: user.funds
            }

            jwt.sign(
                payload,
                keys.secretOrKey,
                {
                    expiresIn: '2d'
                },
                (err, token) => {
                    res.json({
                        success: true,
                        token: "Bearer " + token
                    })
                }
            )

            // res.status(200).send({ success: true, data: payload });
        }
    });
});


module.exports = router;