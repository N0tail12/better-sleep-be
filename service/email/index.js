const logger = require("../../utils/logger.js")(__filename);
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const createNewUserMail = (receiver, subject, htmlContent) => {
  const mailOptions = {
    from: "lpic.nonreply@gmail.com",
    to: receiver,
    subject: subject,
    html: htmlContent
  };

  (async () => {
    try {
      await sgMail.send(mailOptions);
      return true;
    } catch (error) {
      logger.error(error);
      return false;
    }
  })();
};

const sendEmail = mailOptions => {
  (async () => {
    try {
      await sgMail.send(mailOptions);
      return true;
    } catch (error) {
      logger.error(error);
      return false;
    }
  })();
};

module.exports = {
  createNewUserMail,
  sendEmail
};
