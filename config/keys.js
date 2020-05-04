// module.exports = {
//   googleClientID:
//     "741640444079-h2qind2jfitutg6gs7gurfm5sltaocjf.apps.googleusercontent.com",
//   googleClientSecret: "O08-V1C-Zj4rUo24dv-jC1mS",
//   mongoDBURL:
//     'mongodb+srv://mohammed:qJ6lRFcvW1bvL4Gt@stephen-lzt2d.mongodb.net/Stephen?retryWrites=true&w=majority"',
//   cookieKey: "iiiiiiiiiii",
// };

module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoDBURL: process.env.MONGODB_URL,
  cookieKey: process.env.COOKIE_KEY,
};

// //sequantial
// git status
// git add .
// git commit -m "any string"
// git push heroku master
