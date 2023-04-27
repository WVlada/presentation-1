// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function handler(req, res) {
  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: process.env.SENDGRID_TO_EMAIL,
    from: "test@example.com", // Use the email address or domain you verified above
    subject: `Presentation app email from ${req.body.name} ${req.body.email}`,
    text: req.body.poruka,
    html: "<strong>good luck</strong>",
  };
  console.log(sgMail);
  try {
    let response = await sgMail.send(msg);
    console.log(response.statusCode);
    console.log(response.headers);
  } catch (err) {
    console.log(err.response.body.errors);
  }

  res.status(200).json({ data: "s" });
}
