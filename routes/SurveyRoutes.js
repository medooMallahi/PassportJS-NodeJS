const requireLogin = require("../middlwares/requireLogin");
const requireCredits = require("../middlwares/requireCredits");

const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");

const mongoose = require("mongoose");
const Survey = mongoose.model("surveys");

module.exports = (app) => {
  app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, emails } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: emails.split(",").map((email) => ({ email: email.trim() })),
      _user: req.user.id,
      datesent: Date.now(),
    });

    const mailer = new Mailer(survey, surveyTemplate(survey));

    try {
      await mailer.send();
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  }); // end of post
}; // end of module
