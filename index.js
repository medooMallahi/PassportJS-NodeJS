//importing libraries
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookiesession = require("cookie-session");
const passport = require("passport");
const mongoose = require("mongoose");
const keys = require("./config/keys");
app.use(bodyParser.json());
require("./models/User");
require("./models/Survey");
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
//BillingRoutes
require("./routes/billingRoutes")(app);
//SurveyRoutes
require("./routes/SurveyRoutes")(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
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
