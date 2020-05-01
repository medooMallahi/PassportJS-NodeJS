//importing libraries
const express = require("express");
const app = express();
const cookiesession = require("cookie-session");
const passport = require("passport");
const mongoose = require("mongoose");
const keys = require("./config/keys");

require("./models/User");
require("./services/passport");

app.use(
  cookiesession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

//Authentication
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
mongoose
  .connect(keys.mongoDBURL)
  .then((result) => {
    console.log("connection succeeded");
    app.listen(PORT);
  })
  .catch((err) => {
    console.log("connection Failed");
    console.log(err);
  });
