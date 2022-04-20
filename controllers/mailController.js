const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "mailgun",
  host: process.env.MAILGUN_HOST,
  port: process.env.MAILGUN_PORT,
  auth: {
    user: process.env.MAILGUN_USER,
    pass: process.env.MAILGUN_PASSWORD,
  },
});

transporter.verify((error, success) => {
  error
    ? console.log(error.message)
    : console.log(`Ready to send emails : ${success}`);
});

const sendPayOfflineEmailOptions = {
  from: "info@worldeyewearstore.com",
  to: "alimbolar@gmail.com",
  subject: "Your Order Details",
  text: "Testing Nodemailer",
};

exports.sendPayOfflineEmail = (req, res, next) => {
  transporter.sendMail(sendPayOfflineEmailOptions, (error, success) => {
    if (error) {
      console.log(error.message);
    } else {
      console.log(success);
      res.json(success);
    }
  });
};
