const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const shortid = require("shortid");
const passport = require("passport");
var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const User = require("../models/user");
const router = express.Router();
var item=require("../itemlib");


passport.use(new GoogleStrategy({
    clientID:     "31856671834-lcgthafc6opobvo6f8tq1u6ung0stjb0.apps.googleusercontent.com",
    clientSecret: "acPWZsv-xCKNW5amEjPvfj0z",
    callbackURL: "/api/auth/google/redirect",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    console.log(profile);

    
    
  }
));

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"], }));

//Callback route for google to redirect
router.get("/google/redirect",  (req, res, next) => {
        //console.log(req);
        res.redirect("/login");
    }
);



module.exports = router;