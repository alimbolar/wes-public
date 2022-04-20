const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();
const email = require("./../views/email-templates/renderOrder");

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

exports.sendPayOfflineEmail = (req, res, next) => {
  const mailOptions = {
    from: req.body.customerEmail,
    to: "alimbolar@gmail.com",
    subject: `Order Details for ${req.body.customerName}`,
    html: email.renderOrder(),
  };
  transporter.sendMail(mailOptions, (error, data) => {
    if (error) {
      console.log(error.message);
      res.json({
        status: "fail",
      });
    } else {
      console.log(`Message sent`);
      res.json({ status: "success", email: req.body.customerEmail });
    }
  });
};
