
import dotenv from "dotenv";
import nodemailer from "nodemailer";
dotenv.config();

export const NodeMailerEmailSender = async ({ to, subject, html, attachments, text }) => {
  try {
    const TransPorter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.NODEMAILER_EMAIL,
         pass: process.env.NODEMAILER_PASSWORD,
        // user:  "maximnyansa75@gmail.com",
        // pass: "uqpo lean remu tzjb"
      },
      debug: true, // Enable debug output
     logger: true, // Log information to console
    });

    const mailOptions = {
      from: "maximnyansa75@gmail.com",
      to,
      subject,
      text,
      html,
      attachments,
    };

    const result = await TransPorter.sendMail(mailOptions);
    // console.log('Email sent:', result);
    return result;
  } catch (error) {
    console.error("Error sending email:", error.message);
    throw new Error("Email Not Sent");
  }
};

// export const sendEmailService = async (args) => {
//   if (process.env.NODE_ENV === "development") {
//     return Promise.resolve();
//   } else {
//     return await NodeMailerEmailSender(args);
//   }
// };
