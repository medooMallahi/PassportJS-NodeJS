const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");
const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

// this first step
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      const founedUser = await User.findOne({ googleId: profile.id });
      if (founedUser) return done(null, founedUser);

      const userDocument = await new User({ googleId: profile.id }).save();
      done(null, userDocument);
    } // end of async function
  ) // end of Google strategy
); // end of middleware
