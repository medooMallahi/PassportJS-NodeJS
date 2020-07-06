const keys = require("../config/keys");
const sendgrid = require("sendgrid");
const helper = sendgrid.mail;

class Mailer extends helper.Mail {
  constructor({ subject, recipients }, content) {
    super();
    this.sgApi = sendgrid(keys.sendGridKey);
    this.from_email = new helper.Email("no-replay@emaily.com");
    this.subject = subject;
    this.body = new helper.Content("text/html", content);
    this.recipients = this.formatAddresses(recipients);
    this.addContent(this.body);
    this.addClickTracking();
    this.addRecipients();
  } // end of the constractor

  formatAddresses(recipients) {
    return recipients.map(({ email }) => {
      return new helper.Email(email);
    });
  } // end of function

  addClickTracking() {
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);
    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  } // end of function

  addRecipients() {
    const personalize = new helper.Personalization();
    this.recipients.forEach((recipient) => {
      personalize.addTo(recipient);
    });
    this.addPersonalization(personalize);
  } // end of function

  async send() {
    const request = this.sgApi.emptyRequest({
      method: "POST",
      path: "/v3/mail/send",
      body: this.toJSON(),
    });
    const response = await this.sgApi.API(request);
    return response;
  } // end of function
} // end of classe

module.exports = Mailer;
