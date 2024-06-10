var nodemailer = require("nodemailer");

export default async function handler(req, res) {
  console.log("req.body", req.body)
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_MAIL,
      pass: process.env.NODEMAILER_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  var mailOptions = {
    from: process.env.NODEMAILER_MAIL,
    to: process.env.NODEMAILER_MAIL,
    subject: `Presentation app email from ${req.body.name} ${req.body.email}`,
    html: req.body.poruka,
  };
  let mail = await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response);
      }
    });
  });
  console.log("**", mail)
  res.status(200).json({ data: "s" });
}

async function sendMail(subject, toEmail, emailText) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_MAIL,
      pass: process.env.NODEMAILER_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  var mailOptions = {
    from: process.env.NODEMAILER_MAIL,
    to: process.env.NODEMAILER_MAIL,
    subject: `Presentation app email from ${req.body.name} ${req.body.email}`,
    html: "<strong>good luck</strong>",
  };
}

//export default async function handler(req, res) {
//  const sgMail = require("@sendgrid/mail");
//  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
//  const msg = {
//    to: process.env.SENDGRID_TO_EMAIL,
//    from: process.env.SENDGRID_FROM_EMAIL, // Use the email address or domain you verified above
//    subject: `Presentation app email from ${req.body.name} ${req.body.email}`,
//    text: req.body.poruka,
//    html: "<strong>good luck</strong>",
//  };
//  console.log(sgMail);
//  try {
//    let response = await sgMail.send(msg);
//    console.log(response.statusCode);
//    console.log(response.headers);
//  } catch (err) {
//    console.log(err.response.body.errors);
//  }
//  console.log(process.env);
//  res.status(200).json({ data: "s" });
//}
